import ISessionCreateOptions from '@justinearl/hero-interfaces/ISessionCreateOptions';
import ConnectionToHeroCore from '../connections/ConnectionToHeroCore';
import IConnectionToCoreOptions from './IConnectionToCoreOptions';
import CallsiteLocator from '../lib/CallsiteLocator';

export default interface IHeroCreateOptions
  extends Partial<Omit<ISessionCreateOptions, 'sessionName' | 'dependencyMap'>> {
  name?: string;
  connectionToCore?: IConnectionToCoreOptions | ConnectionToHeroCore | string;
  callsiteLocator?: CallsiteLocator;
}
