import IScriptRunMeta from '@justinearl/hero-interfaces/IScriptInvocationMeta';
import Callsite from '@justinearl/commons/lib/Callsite';
import { filterUndefined } from '@justinearl/commons/lib/objectUtils';

const scriptInstanceVersion = Date.now().toString();

let counter = 0;
let runtimeDefaults: Partial<IScriptRunMeta>;

export default class ScriptInvocationMeta {
  public static getScriptInvocationMeta(defaults: Partial<IScriptRunMeta> = {}): IScriptRunMeta {
    runtimeDefaults ??= {
      version: scriptInstanceVersion,
      workingDirectory: process.cwd(),
      entrypoint: Callsite.getEntrypoint(),
      runtime: 'node',
      execPath: process.execPath,
      execArgv: process.execArgv,
    };

    const result = {
      ...runtimeDefaults,
      ...filterUndefined(defaults),
    } as IScriptRunMeta;
    if (!result.runId) result.runId = String(counter++);
    return result;
  }
}
