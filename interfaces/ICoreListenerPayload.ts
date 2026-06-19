import type ICoreEventPayload from '@justinearl/net/interfaces/ICoreEventPayload';
import ISessionMeta from './ISessionMeta';

export default interface ICoreListenerPayload extends ICoreEventPayload<any, any> {
  meta: ISessionMeta;
  lastCommandId?: number;
}
