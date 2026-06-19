import type ISourceCodeLocation from '@justinearl/commons/interfaces/ISourceCodeLocation';

export default interface ISourceCodeReference {
  sourcecode: (ISourceCodeLocation & { code: string })[];
}
