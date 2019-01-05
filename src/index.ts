


async function click() {
  console.log('click!');
  await import(/* webpackChunkName: "dynamic" */'./dynamic').then((module) => {
    // @ts-ignore
    document.querySelector('#output').innerHTML = new module.DynamicModule().getValue();
  });
}

let button:HTMLButtonElement = document.createElement('button');
button.onclick=click;
button.innerHTML='load dynamic module';
let body = document.querySelector('body');
// @ts-ignore
body.appendChild(button);
let div:HTMLDivElement = document.createElement('div');
div.id = 'output';
// @ts-ignore
body.appendChild(div);
