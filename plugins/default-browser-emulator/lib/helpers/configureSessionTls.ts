import IEmulationProfile from '@justinearl/unblocked-specification/plugin/IEmulationProfile';
import ITlsSettings from '@justinearl/unblocked-specification/agent/net/ITlsSettings';

export default function configureSessionTls(
  emulationProfile: IEmulationProfile,
  settings: ITlsSettings,
): void {
  const { browserName, browserVersion, string } = emulationProfile.userAgentOption;
  settings.tlsClientHelloId = `${browserName}-${browserVersion.major}`;
  settings.proxyUseragent = string;
}
