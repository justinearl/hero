import Log from '@justinearl/commons/lib/Logger';
import Core, { Session } from '@justinearl/hero-core';
import CorePlugins from '@justinearl/hero-core/lib/CorePlugins';
import BrowserContext from '@justinearl/unblocked-agent/lib/BrowserContext';

const { log } = Log(module);

export default class MirrorContext {
  public static async createFromSessionDb(
    sessionId: string,
    core: Core,
    headed = true,
  ): Promise<BrowserContext> {
    const options = await Session.restoreOptionsFromSessionRecord({}, sessionId, core);
    delete options.resumeSessionId;
    delete options.resumeSessionStartLocation;
    options.showChromeInteractions = headed;
    options.showChrome = headed;

    const logger = log.createChild(module, { sessionId });

    const agent = core.pool.createAgent({
      options,
      logger,
      deviceProfile: options?.userProfile?.deviceProfile,
      id: sessionId,
    });

    const _ = new CorePlugins(
      agent,
      {
        getSessionSummary() {
          return {
            id: sessionId,
            options,
          };
        },
      },
      core.corePluginsById,
    );

    return await agent.open();
  }
}
