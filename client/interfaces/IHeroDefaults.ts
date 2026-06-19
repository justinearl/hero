import { IBlockedResourceType, InterceptedResource } from '@justinearl/hero-interfaces/ITabOptions';
import IUserProfile from '@justinearl/hero-interfaces/IUserProfile';

export default interface IHeroDefaults {
  blockedResourceTypes?: IBlockedResourceType[];
  blockedResourceUrls?: (string | RegExp)[];
  interceptedResources?: InterceptedResource[];
  userProfile?: IUserProfile;
  shutdownOnProcessSignals?: boolean;
}
