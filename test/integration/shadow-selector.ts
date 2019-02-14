import { Selector } from "testcafe";

export interface SSelector extends Selector {
  findElementText(components: string[], sel?: string): Promise<any>;
  countComponents(components: string): Promise<any>;
}

/**
 * Customized selector for
 * @param t
 * @constructor
 */
export function ShadowSelector(t: any): SSelector {
  
  return <SSelector>Selector('stn-showroom')
    .addCustomMethods(
      {
        findElementText: (node, components: string[], element) => {
          let querySelector: HTMLElement | null = node
            .shadowRoot!
            .querySelector('stn-demo-example');
    
          components.map((sel) => querySelector = querySelector!.shadowRoot!.querySelector(sel));
    
          querySelector = querySelector!
            .shadowRoot!
            .querySelector(element);
    
          return querySelector!.innerText;
        },
  
        /**
         * Count the occurrence of an element
         * @param node
         * @param components
         */
        countComponents: (node, components) => {
          let root: any = node!
            .shadowRoot!
            .querySelector('stn-demo-example');
          
          return root.shadowRoot.querySelectorAll(components).length;
          
        }
      })
    .with({boundTestRun: t});
}


