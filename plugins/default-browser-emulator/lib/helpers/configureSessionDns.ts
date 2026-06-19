import IDnsSettings from '@justinearl/unblocked-specification/agent/net/IDnsSettings';
import IEmulationProfile from '@justinearl/unblocked-specification/plugin/IEmulationProfile';

export default function configureSessionDns(
  emulationProfile: IEmulationProfile,
  settings: IDnsSettings,
): void {
  settings.dnsOverTlsConnection = null;
}
