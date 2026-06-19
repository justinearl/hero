import Core from '@justinearl/hero-core';
import Hero from '@justinearl/hero'
import ExecuteJsPlugin from '@justinearl/execute-js-plugin';

Core.use(ExecuteJsPlugin);

// NOTE: You need to start a Ulixee Cloud **in this same process** to run this example
import './server'

(async function main() {
  const hero = new Hero();
  hero.use(ExecuteJsPlugin);

  await hero.goto('https://ulixee.org');
  await hero.activeTab.waitForPaintingStable();
  const divs = await hero.executeJs(() => {
    // @ts-ignore
    return window.document.querySelectorAll('div').length;
  });
  console.log('Divs on https://ulixee.org?', divs);
  await hero.close();
})();
