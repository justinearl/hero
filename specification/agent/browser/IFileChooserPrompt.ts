import { IJsPath } from '@justinearl/js-path';

export default interface IFileChooserPrompt {
  frameId: number;
  selectMultiple: boolean;
  jsPath: IJsPath;
}
