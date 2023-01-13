import runShoppingApp from '@/app/main';
import { appRootId } from '@/utils/constants';

const appRoot = document.getElementById(appRootId);

if (!appRoot) {
  console.error(`Could not find app root: <<${appRootId}>>!`);
} else {
  console.log(`App root found: <<${appRootId}>>! Starting app!`);
  runShoppingApp(appRoot);
}
