export default function InitDynamicModule() {

  async function click() {
    console.log('click!');
    await import(/* webpackChunkName: "dynamic" */'./dynamic/index-old').then((module) => {
      // @ts-ignore
      document.querySelector('#output').innerHTML = new module.DynamicModule().getValue();
    });
  }

  let feature: HTMLDivElement = document.createElement('div');
  feature.onclick = click;
  feature.className = 'feature';

  let label:HTMLParagraphElement = document.createElement('p');
  label.innerHTML='load dynamic module';
  label.className = 'feature-label';

  let p:HTMLParagraphElement = document.createElement('p');
  p.className = 'feature-label';
  p.id = 'output';

  let app = document.querySelector('app');
  // @ts-ignore
  feature.appendChild(label);
  // @ts-ignore
  feature.appendChild(p);
  // @ts-ignore
  app.appendChild(feature);


}
