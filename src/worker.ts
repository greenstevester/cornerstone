export default function InitWorker() {
  if ('serviceWorker' in navigator) {
    // ifwindow.addEventListener('load', () => {
    //   navigator.serviceWorker.register('/service-worker.js').then(registration => {
    //     console.log('SW registered: ', registration);
    //   }).catch(registrationError => {
    //     console.debug('SW registration failed: ', registrationError);
    //   });
    // });
  }
}
