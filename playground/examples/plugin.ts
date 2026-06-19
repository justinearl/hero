import DefaultBrowserEmulator from '@justinearl/default-browser-emulator';
import { ConnectionToHeroCore } from '@justinearl/hero';
import HeroCore from '@justinearl/hero-core';
import ExecuteJsPlugin from '@justinearl/execute-js-plugin';
import Hero, { LocationTrigger } from '@justinearl/hero';
import TransportBridge from '@justinearl/net/lib/TransportBridge';

async function run() {
  HeroCore.defaultUnblockedPlugins = [DefaultBrowserEmulator];
  HeroCore.use(ExecuteJsPlugin);
  const bridge = new TransportBridge();
  const connectionToCore = new ConnectionToHeroCore(bridge.transportToCore);

  const heroCore = new HeroCore();
  heroCore.addConnection(bridge.transportToClient);

  const hero = new Hero({ connectionToCore });
  await hero.goto('https://example.org/');
  await hero.waitForPaintingStable();

  console.log('\n-- PRINTING location.href ---------');
  console.log(await hero.url);

  const outerHtml = await hero.document.documentElement.outerHTML;
  const linkElement = hero.document.querySelector('a');

  console.log('-- PRINTING outerHTML of link ---------------');
  console.log(outerHtml);
  console.log('OUTPUT from https://example.org', {
    outerHtml,
    title: await hero.document.title,
    intro: await hero.document.querySelector('p').textContent,
    linkTag: await linkElement.outerHTML,
  });
  console.log('-------------------------------------');

  await linkElement.$click();
  await hero.waitForLocation(LocationTrigger.change);
  console.log('NEW LOCATION: ', await hero.document.location.href);
  console.log('-------------------------------------');

  await hero.close();
  await heroCore.close();
}

run().catch(error => console.log(error));
