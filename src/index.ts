async function loadFirebaseApp() {
  return await import('./dynamic');
}

loadFirebaseApp()
  .then(() => {
    console.log('lazy module loaded');
  });
