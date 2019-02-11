import { ClientFunction, Selector } from "testcafe";

export async function ShadowSlectorInit(t: any) {
  let func = ClientFunction(() => {
    
    var script = document.createElement('script');
    
    script.innerHTML = `
       const shadowGet = function (components,selector) {
          let node= document;
          components.map(function (wc){
            
            node = node.querySelector(wc).shadowRoot;
          });
          if(selector){
            return node.querySelectorAll(selector);
          } else {
            return node;
          }
        }
      `;
    
    document.body.appendChild(script);
  }).with({boundTestRun: t});
  
  await func();
}

export function ShadowSelector(innerSelector: string): Selector {
  return Selector(() => {
    // @ts-ignore
    return shadowGet(['stn-showroom', 'stn-demo-example']);
  }).find(innerSelector);
}
