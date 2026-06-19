import IDomState from '@justinearl/hero-interfaces/IDomState';
import ISourceCodeLocation from '@justinearl/commons/interfaces/ISourceCodeLocation';
import DomState from '../lib/DomState';

export default interface IFlowHandler {
  id?: number;
  name: string;
  state: IDomState | DomState;
  handlerFn: (error?: Error) => Promise<any>;
  callsitePath: ISourceCodeLocation[];
}
