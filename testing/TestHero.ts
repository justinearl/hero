import Core from '@justinearl/hero-core';
import DefaultHero, { ConnectionToHeroCore, IHeroCreateOptions } from '@justinearl/hero';
import TransportBridge from '@justinearl/net/lib/TransportBridge';

let core: Core;
export default class TestHero extends DefaultHero {
  constructor(createOptions: IHeroCreateOptions = {}) {
    createOptions.connectionToCore ??= TestHero.getDirectConnectionToCore();
    super(createOptions);
  }

  public static getDirectConnectionToCore(): ConnectionToHeroCore {
    const bridge = new TransportBridge();
    core ??= new Core();
    core.addConnection(bridge.transportToClient);
    return new ConnectionToHeroCore(bridge.transportToCore);
  }
}
