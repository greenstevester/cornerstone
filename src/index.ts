


async function click() {
  console.log('click!');
  await import(/* webpackChunkName: "dynamic" */'./dynamic').then((module) => {
    // @ts-ignore
    document.querySelector('#output').innerHTML = new module.DynamicModule().getValue();
  });
}

let button:HTMLButtonElement = document.createElement('button');
button.onclick=click;
button.innerHTML='load';
let body = document.querySelector('body');
// @ts-ignore
body.appendChild(button);
let div:HTMLDivElement = document.createElement('div');
div.id = 'output';
// @ts-ignore
body.appendChild(div);


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
