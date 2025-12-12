import CloseDefault from './Close';
import ChevronDownDefault from './ChevronDown';
import CheckDefault from './Check';
import ArrowLeftDefault from './ArrowLeft';
import ArrowRightDefault from './ArrowRight';
import EyeDefault from './Eye';
import TrashDefault from './Trash';
import UploadCircleDefault from './UploadCircle';
import FileDefault from './File';
import EmptyBoxDefault from './EmptyBox';
import WarningDefault from './Warning';
import InfoDefault from './Info';
import SpinnerDefault from './Spinner';

export { Close } from './Close';
export { ChevronDown } from './ChevronDown';
export { Check } from './Check';
export { ArrowLeft } from './ArrowLeft';
export { ArrowRight } from './ArrowRight';
export { Eye } from './Eye';
export { Trash } from './Trash';
export { UploadCircle } from './UploadCircle';
export { File } from './File';
export { EmptyBox } from './EmptyBox';
export { Warning } from './Warning';
export { Info } from './Info';
export { Spinner } from './Spinner';

const icons = {
  Close: CloseDefault,
  ChevronDown: ChevronDownDefault,
  Check: CheckDefault,
  ArrowLeft: ArrowLeftDefault,
  ArrowRight: ArrowRightDefault,
  Eye: EyeDefault,
  Trash: TrashDefault,
  UploadCircle: UploadCircleDefault,
  File: FileDefault,
  EmptyBox: EmptyBoxDefault,
  Warning: WarningDefault,
  Info: InfoDefault,
  Spinner: SpinnerDefault,
} as const;

export default icons;
