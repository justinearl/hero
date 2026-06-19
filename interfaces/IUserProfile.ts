import IDomStorage from '@justinearl/unblocked-specification/agent/browser/IDomStorage';
import { ICookie } from '@justinearl/unblocked-specification/agent/net/ICookie';
import IDeviceProfile from '@justinearl/unblocked-specification/plugin/IDeviceProfile';
import IGeolocation from '@justinearl/unblocked-specification/plugin/IGeolocation';
import IUserAgentOption from '@justinearl/unblocked-specification/plugin/IUserAgentOption';

export default interface IUserProfile {
  cookies?: ICookie[];
  storage?: IDomStorage;
  userAgentString?: string;
  userAgent?: IUserAgentOption;
  // need actual user agent details...
  timezoneId?: string;
  locale?: string;
  geolocation?: IGeolocation;
  deviceProfile?: IDeviceProfile;
}
