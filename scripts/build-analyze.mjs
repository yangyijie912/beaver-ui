import esbuild from 'esbuild';
import fs from 'fs';

(async () => {
  try {
    // Ensure output dirs exist
    fs.mkdirSync('dist', { recursive: true });
    fs.mkdirSync('dist-analyze', { recursive: true });

    const result = await esbuild.build({
      entryPoints: ['src/index.ts'],
      bundle: true,
      format: 'esm',
      platform: 'browser',
      sourcemap: false,
      metafile: true,
      write: true,
      outdir: 'dist-analyze',
      minify: true,
      external: ['react', 'react-dom'],
      loader: {
        '.svg': 'file',
        '.png': 'file',
        '.css': 'css',
      },
    });

    const meta = result.metafile;
    fs.writeFileSync('dist/metafile.json', JSON.stringify(meta, null, 2));

    const analysis = await esbuild.analyzeMetafile(meta, { verbose: true });
    console.log('\n=== Bundle analysis (verbose) ===\n');
    console.log(analysis);
    console.log('\nWrote dist/metafile.json for further inspection.');
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
