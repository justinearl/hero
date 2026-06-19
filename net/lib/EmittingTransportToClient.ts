import ITypedEventEmitter from '@justinearl/commons/interfaces/ITypedEventEmitter';
import addGlobalInstance from '@justinearl/commons/lib/addGlobalInstance';
import { TypedEventEmitter } from '@justinearl/commons/lib/eventUtils';
import '@justinearl/commons/lib/SourceMapSupport';
import ITransport, { ITransportEvents } from '../interfaces/ITransport';

let counter = 0;

type TEvents = ITransportEvents & {
  outbound: any;
};

export default class EmittingTransportToClient
  extends TypedEventEmitter<TEvents>
  implements ITransport, ITypedEventEmitter<TEvents>
{
  remoteId = String((counter += 1));
  isConnected = true;

  send(message: any): Promise<void> {
    this.emit('outbound', message);
    return Promise.resolve();
  }
}

addGlobalInstance(EmittingTransportToClient);
