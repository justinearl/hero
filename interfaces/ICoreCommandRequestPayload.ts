import type ICoreRequestPayload from '@justinearl/net/interfaces/ICoreRequestPayload';
import ISourceCodeLocation from '@justinearl/commons/interfaces/ISourceCodeLocation';
import ISessionMeta from './ISessionMeta';

export default interface ICoreCommandRequestPayload extends ICoreRequestPayload<any, any> {
  meta?: ISessionMeta;
  callsite?: ISourceCodeLocation[];
  retryNumber?: number;
  activeFlowHandlerId?: number;
  flowCommandId?: number;
  recordCommands?: Omit<ICoreCommandRequestPayload, 'meta' | 'messageId' | 'sendTime'>[];
}
