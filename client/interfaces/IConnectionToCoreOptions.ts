import ICoreConfigureOptions from '@justinearl/hero-interfaces/ICoreConfigureOptions';

export default interface IConnectionToCoreOptions
  extends Omit<ICoreConfigureOptions, 'maxConcurrentClientCount'> {
  version?: string;
  host?: string | Promise<string>;
  maxConcurrency?: number;
  instanceTimeoutMillis?: number;
}
