import { CanceledPromiseError } from '@justinearl/commons/interfaces/IPendingWaitEvent';
import { registerSerializableErrorType } from '@justinearl/commons/lib/TypeSerializer';
import addGlobalInstance from '@justinearl/commons/lib/addGlobalInstance';

export default class DisconnectedError extends CanceledPromiseError {
  public code = 'DisconnectedError';
  constructor(
    readonly host: string,
    message?: string,
  ) {
    super(message ?? `This transport has been disconnected (host: ${host})`);
    this.name = 'DisconnectedError';
  }
}

addGlobalInstance(DisconnectedError);
registerSerializableErrorType(DisconnectedError);
