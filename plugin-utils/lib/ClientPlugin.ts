import IClientPlugin, {
  ClientPluginClassDecorator,
  IClientPluginClass,
} from '@justinearl/hero-interfaces/IClientPlugin';
import { PluginTypes } from '@justinearl/hero-interfaces/IPluginTypes';

@ClientPluginClassDecorator
export default class ClientPlugin implements IClientPlugin {
  public static readonly id: string;
  public static readonly type = PluginTypes.ClientPlugin;

  public readonly id: string;

  constructor() {
    this.id = (this.constructor as IClientPluginClass).id;
  }
}
