import DisconnectedError from '@justinearl/net/errors/DisconnectedError';
import { registerSerializableErrorType } from '@justinearl/commons/lib/TypeSerializer';
import addGlobalInstance from '@justinearl/commons/lib/addGlobalInstance';

export default class DisconnectedFromCoreError extends DisconnectedError {
  public override code = 'DisconnectedFromCore';
  constructor(readonly coreHost: string) {
    super(`This Hero has been disconnected from Core (coreHost: ${coreHost})`);
    this.name = 'DisconnectedFromCore';
  }
}

addGlobalInstance(DisconnectedFromCoreError);
registerSerializableErrorType(DisconnectedFromCoreError);
