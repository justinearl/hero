import { IBoundLog } from '@justinearl/commons/interfaces/ILog';
import ICorePlugin, {
  CorePluginClassDecorator,
  ICorePluginClass,
  ISessionSummary,
} from '@justinearl/hero-interfaces/ICorePlugin';
import { PluginTypes } from '@justinearl/hero-interfaces/IPluginTypes';
import ICorePluginCreateOptions from '@justinearl/hero-interfaces/ICorePluginCreateOptions';
import IBrowserEngine from '@justinearl/unblocked-specification/agent/browser/IBrowserEngine';
import ICorePlugins from '@justinearl/hero-interfaces/ICorePlugins';

@CorePluginClassDecorator
export default class CorePlugin implements ICorePlugin {
  public static id: string;
  public static type = PluginTypes.CorePlugin;

  public readonly id: string;
  public readonly sessionSummary: ISessionSummary;

  protected readonly browserEngine: IBrowserEngine;
  protected readonly plugins: ICorePlugins;
  protected readonly logger: IBoundLog;

  constructor({ emulationProfile, corePlugins, logger, sessionSummary }: ICorePluginCreateOptions) {
    this.id = (this.constructor as ICorePluginClass).id;
    this.browserEngine = emulationProfile.browserEngine;
    this.plugins = corePlugins;
    this.logger = logger;
    this.sessionSummary = sessionSummary ?? { id: undefined, options: {} };
  }
}
