import { Selector } from "testcafe";

export interface SSelector extends Selector {
  findElementText(components: string[], sel?: string): Promise<any>;
  countComponents(components: string): Promise<any>;
}

export function ShadowSelector(t: any): SSelector {
  
  return <SSelector>Selector('stn-showroom')
    .addCustomMethods(
      {
        findElementText: (node, components, element) => {
          let querySelector = node
            .shadowRoot!
            .querySelector('stn-demo-example');
          
          let querySelector1 = querySelector!
            .shadowRoot!
            .querySelector(components[0]);
          
          let querySelector2 = querySelector1
            .shadowRoot
            .querySelector(element);
          
          return querySelector2.innerText;
        },
        countComponents: (node, components) => {
          let root: any = node!
            .shadowRoot!
            .querySelector('stn-demo-example');
          
          return root.shadowRoot.querySelectorAll(components).length;
          
        }
      })
    .with({boundTestRun: t});
}


