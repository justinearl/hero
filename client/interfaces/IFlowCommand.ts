import ISourceCodeLocation from '@justinearl/commons/interfaces/ISourceCodeLocation';

export default interface IFlowCommand {
  id?: number;
  parentId?: number;
  retryNumber?: number;
  callsitePath: ISourceCodeLocation[];
}
