import runShoppingApp from './app/main';

const appRootId = 'shopping-app';
const appRoot = document.getElementById(appRootId);

if (!appRoot) {
  console.error(`Could not find app root: <<${appRootId}>>!`);
} else {
  console.log(`App root found: <<${appRootId}>>! Starting app!`);
  runShoppingApp(appRoot);
}
