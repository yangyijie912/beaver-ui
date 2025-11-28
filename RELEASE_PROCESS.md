# 发布与 CI 流程（可复现步骤、问题与解决）

本文档记录了在 `beaver-ui` 仓库中从本地测试、构建到通过 GitHub Actions 发布到 npm 的可复现步骤，以及在实际运行中遇到的问题与解决办法，便于日后维护和回溯。

---

## 前提条件

- 在本地安装 `node`（建议 v18+ 或 v20）和 `pnpm`（通过 `corepack` 管理）。
- 已在 npm 上拥有发布权限的账号，并能创建 automation/granular token。
- GitHub 仓库已配置 `publish` 工作流（`.github/workflows/publish.yml`）和 `ci` 工作流（`.github/workflows/ci.yml`）。

## 本地复现步骤（逐步）

1. 拉取最新代码并切到主分支（或开发分支）：

   ```bash
   git fetch origin
   git checkout master
   git pull origin master
   ```

2. 启用 corepack 并准备 pnpm：

   ```bash
   corepack enable
   corepack prepare pnpm@latest --activate
   ```

3. 安装依赖并生成 `pnpm-lock.yaml`（如果本地还未生成）：

   ```bash
   pnpm install
   ```

4. 运行单元/故事测试（Vitest + Storybook 环境测试）：

   ```bash
   pnpm test -- --run
   ```

   - 注意：测试依赖浏览器（Playwright）。若本地未安装 Playwright 浏览器，会看到提示： `Please run pnpm exec playwright install`。
   - 运行下面命令安装 Playwright 浏览器及其系统依赖（Linux runner 上推荐加 `--with-deps`）：

     ```bash
     pnpm exec playwright install --with-deps
     ```

5. 构建产物（tsup + 生成 tokens）：

   ```bash
   pnpm run build
   ```

6. 本地模拟发布（dry-run）：

   ```bash
   pnpm publish --access public --dry-run
   ```

   - 这一步不会实际发布到 npm，但会列出将打包并发布的文件。若出现 `ERR_PNPM_GIT_UNCLEAN`，请先提交或 stash 本地改动。

7. 打包并生成 tarball（可选）：

   ```bash
   pnpm pack
   ```

## 在 CI（GitHub Actions）中发布的准备工作

1. 在 npm 上创建 automation/granular token：
   - 登录 `https://www.npmjs.com` → Access Tokens → New Token（选择 Automation/Granular）。
   - 建议名称：`beaver-ui-ci`，说明写为 `用于 GitHub Actions 发布 beaver-ui`。
   - 如果你的账号启用了 2FA，请勾选 `Bypass two-factor authentication`（allow automation token to bypass OTP），否则 CI 无法发布。
   - Packages / Scopes：建议最小权限（只选择目标 scope/package，或在首次发布时选择 `All packages` 以确保可发布非 scoped 包）。
   - 复制生成的 token（只会显示一次）。

2. 在 GitHub 仓库中添加 Secret：
   - 打开仓库 → `Settings` → `Secrets and variables` → `Actions` → `New repository secret`。
   - Name：`NPM_TOKEN`，Value：粘贴刚才复制的 token，保存。

3. 确保工作流文件中使用 `NPM_TOKEN`（本仓库示例）：
   - `.github/workflows/publish.yml`：会在发布步骤写入 `~/.npmrc`，例如：

     ```yaml
     - name: Publish to npm
       env:
         NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
       run: |
         echo "//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}" > ~/.npmrc
         pnpm publish --access public --no-git-checks
     ```

   - 说明：在 tag 事件 CI 上处于 detached HEAD，pnpm 的 git 检查会拒绝发布（ERR_PNPM_GIT_UNKNOWN_BRANCH），因此这里使用 `--no-git-checks` 跳过该检查（我们在 workflow 中已加入该参数）。另一种更严格的做法是先在 CI 中 checkout 目标分支并确保 HEAD 有关联分支。

4. CI 中确保会下载 Playwright 浏览器（否则 Vitest 的浏览器测试会失败）：

   在 workflow 中安装依赖后运行：

   ```yaml
   - name: Install Playwright browsers
     run: pnpm exec playwright install --with-deps
   ```

## 已遇到的问题与解决方法（汇总）

1. Vitest 在 Actions 上报错：Playwright 浏览器二进制找不到（`Executable doesn't exist`）
   - 现象：测试报错并提示运行 `pnpm exec playwright install`。
   - 原因：Playwright 需要在 runner 上下载浏览器二进制，CI 环境默认未下载。
   - 解决：在 workflow 中添加 `pnpm exec playwright install --with-deps` 步骤（已加入 `ci.yml` 与 `publish.yml`）。

2. CI 报错：`ERR_PNPM_NO_LOCKFILE Cannot install with "frozen-lockfile" because pnpm-lock.yaml is absent`
   - 现象：`pnpm install --frozen-lockfile` 在 CI 上失败。
   - 原因：仓库未提交 `pnpm-lock.yaml`，而 CI 的 `frozen-lockfile` 策略默认为 true，阻止安装。
   - 解决：在本地生成 `pnpm-lock.yaml`（`pnpm install`），并将其提交到仓库。我们已将 lockfile 添加并推送。

3. CI 报错：`ERR_PNPM_GIT_UNKNOWN_BRANCH The Git HEAD may not attached to any branch, but your "publish-branch" is set to "master|main".`
   - 现象：在 tag 触发的发布步骤中 `pnpm publish` 被拒绝。
   - 原因：tag 事件在 runner 上通常处于 detached HEAD，pnpm 的 git-checks 会检测 publish-branch 配置并拒绝在 detached HEAD 上发布。
   - 解决：两种可选方式：
     - 在 `pnpm publish` 命令中加 `--no-git-checks`（已应用，适合 CI tag 发布）。
     - 或在 workflow 中先 checkout 对应分支并把 HEAD 指向分支（更严格）。

4. package.json 中 `exports` 的 `types` 条目位置警告
   - 现象：tsup 构建时输出警告：`The condition "types" here will never be used as it comes after both "import" and "require"`。
   - 原因：在 `exports` 内把 `types` 放在 `import`/`require` 之后导致条件永远不会被命中。
   - 解决：把 `types` 保持为顶级字段（`"types": "dist/index.d.ts"`），并在 `exports` 中只保留 `import`/`require`。已更新 `package.json`。

## 发布（通过 CI）- 操作步骤（最终触发）

1. 确认 `NPM_TOKEN` 已添加为 GitHub Secret（`NPM_TOKEN`）。
2. 确认 `pnpm-lock.yaml` 已提交并推送。
3. 确认工作流文件包含 Playwright 安装与 `--no-git-checks`（本仓库已修改）。
4. 创建并推送 tag（例如 `v0.1.3`）：

   ```bash
   git tag v0.1.3
   git push origin v0.1.3
   ```

5. 在 GitHub Actions 中查看 `publish` workflow 日志，确认 `Run tests`、`Build`、`Publish to npm` 步骤是否成功。

## 验证发布结果

1. 在 npm 上检查包是否发布成功：
   - URL（非 scoped）：`https://www.npmjs.com/package/beaver-ui`
   - 或 scoped（如果 `package.json` 名称为 `@scope/name`）：`https://www.npmjs.com/package/@scope/name`

2. 在本地临时项目中安装并测试：

   ```bash
   mkdir /tmp/test-beaver && cd /tmp/test-beaver
   pnpm init -y
   pnpm add beaver-ui@0.1.3
   ```

## 维护建议

- 定期轮换 `NPM_TOKEN`（使用短期过期并在到期前更新 GitHub Secret）。
- 保持 `pnpm-lock.yaml` 与 `package.json` 同步并提交到仓库，以保证 CI 可复现安装。
- 若未来移除浏览器型测试（或改为 headless / jsdom），可以简化 workflow，但建议保留端到端或故事快照测试。

---

文件位置：`RELEASE_PROCESS.md`（仓库根）。如需我将此文档同步为 `README` 中的链接或在 Releases 页面添加引用，我也可以一并修改。
