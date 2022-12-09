const appRootId = 'shopping-app';
const appRoot = document.getElementById(appRootId);

if (!appRoot) {
  console.error(`Could not find app root: ${appRootId}!`);
  // ignoring this as the app.js generated bundle will be inside an IIFE function
  // @ts-ignore: A 'return' statement can only be used within a function body.
  return;
}

console.log('continue');
