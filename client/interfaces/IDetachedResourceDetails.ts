import IResourceMeta from '@justinearl/unblocked-specification/agent/net/IResourceMeta';
import IWebsocketMessage from '@justinearl/hero-interfaces/IWebsocketMessage';

export default interface IDetachedResourceDetails extends Required<IResourceMeta>, IResponseBody {
  response: Required<IResourceMeta['response']> & IResponseBody;
  messages?: IWebsocketMessage[];
}

interface IResponseBody {
  text: string;
  json: any;
}
