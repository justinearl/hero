import { IUnblockedPluginClass } from '@justinearl/unblocked-specification/plugin/IUnblockedPlugin';
import type ISessionRegistry from '@justinearl/hero-core/interfaces/ISessionRegistry';

export default interface ICoreConfigureOptions {
  maxConcurrentClientCount?: number;
  maxConcurrentClientsPerBrowser?: number;
  dataDir?: string;
  defaultUnblockedPlugins?: IUnblockedPluginClass[];
  shouldShutdownOnSignals?: boolean;
  sessionRegistry?: ISessionRegistry;
  disableSessionPersistence?: boolean;
}
