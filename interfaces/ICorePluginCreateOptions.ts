import { IBoundLog } from '@justinearl/commons/interfaces/ILog';
import IEmulationProfile from '@justinearl/unblocked-specification/plugin/IEmulationProfile';
import { PluginCustomConfig } from '@justinearl/unblocked-specification/plugin/IUnblockedPlugin';
import ICorePlugins from './ICorePlugins';
import { ISessionSummary } from './ICorePlugin';

export default interface ICorePluginCreateOptions<C extends object = any> {
  emulationProfile: IEmulationProfile;
  corePlugins: ICorePlugins;
  sessionSummary: ISessionSummary;
  logger: IBoundLog;
  customConfig?: PluginCustomConfig<C>
}
