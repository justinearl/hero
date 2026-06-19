import HeroCore from '@justinearl/hero-core';
import Hero from '@justinearl/hero';
import { TransportBridge } from '@justinearl/net';
import { ConnectionToHeroCore } from '@justinearl/hero';

async function start() {
  await HeroCore.start()
}

async function exec() {
  const bridge = new TransportBridge();
  const connection = new ConnectionToHeroCore(bridge.transportToCore);
  HeroCore.addConnection(bridge.transportToClient);

  const hero = new Hero({connectionToCore: connection, showChrome: true});
  await hero.goto('https://whatsmyreferer.com/', { referrer: 'http://www.this-is-a-fake-referer.com'});
  await hero.waitForPaintingStable();
  console.log('\n-- PRINTING location.href ---------');
  console.log(await hero.url);
  const outerHtml = await hero.document.documentElement.outerHTML;
  console.log(outerHtml);
}

start().then(exec)