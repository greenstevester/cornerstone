async function loadFirebaseApp() {
  return await import(/* webpackChunkName: "dynamic" */'./dynamic');
}

loadFirebaseApp()
  .then(() => {
    console.log('lazy module loaded');
  });

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
