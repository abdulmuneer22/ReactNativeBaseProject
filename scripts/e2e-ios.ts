import { exec } from 'shelljs';

import e2e from '../config/e2e';

const openSimulator = () =>
  exec(`open -a Simulator --args -CurrentDeviceUDID ${e2e.iosDeviceUDID}`);
const detoxBuild = () => exec('detox build --configuration ios.sim.debug');
const detoxTest = () => exec('detox test --configuration ios.sim.debug');

openSimulator();
detoxBuild();
detoxTest();
