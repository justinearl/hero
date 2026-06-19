import IDevtoolsSession from '@justinearl/unblocked-specification/agent/browser/IDevtoolsSession';
import IEmulationProfile from '@justinearl/unblocked-specification/plugin/IEmulationProfile';

export default async function setActiveAndFocused(
  emulationProfile: IEmulationProfile,
  devtools: IDevtoolsSession,
): Promise<void> {
  await devtools.send('Emulation.setFocusEmulationEnabled', { enabled: true }).catch(err => err);
}
