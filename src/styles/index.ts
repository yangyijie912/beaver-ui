// 聚合所有组件样式，供单独构建/引入使用。
// 不要在组件内部直接导入 CSS，以便组件 JS 可以被 tree-shaken。

// tokens
import '../tokens/tokens.css';

// components
import '../components/Alert/Alert.css';
import '../components/Button/Button.css';
import '../components/Pagination/Pagination.css';
import '../components/Upload/Upload.css';
import '../components/Select/Select.css';
import '../components/Toast/Toast.css';
import '../components/DatePicker/DatePicker.css';
import '../components/Popconfirm/Popconfirm.css';
import '../components/Input/Input.css';
import '../components/Form/styles/index.css';
import '../components/Drawer/Drawer.css';
import '../components/Checkbox/Checkbox.css';
import '../components/Switch/Switch.css';
import '../components/Radio/Radio.css';
import '../components/Modal/Modal.css';
import '../components/Table/styles/Table.base.css';
import '../components/Table/styles/Table.sticky.css';
import '../components/Table/styles/Table.bordered.css';
import '../components/Tooltip/Tooltip.css';
import '../components/Toast/Toast.css';
import '../components/DatePicker/components/TimePanel/TimePanel.css';
import '../components/DatePicker/components/YearPanel/YearPanel.css';
import '../components/DatePicker/components/MonthPanel/MonthPanel.css';

export default true;
