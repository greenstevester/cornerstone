import { Selector } from "testcafe";

export interface SSelector extends Selector {
  findShadowedElementText(shadowedComponentSelectors: string[], elementSelector?: string): Promise<any>;

  countComponents(shadowedComponentSelectors: string[]): Promise<any>;
}

/**
 * Customized selector for
 * @param t
 * @param baseSelector
 * @constructor
 */
export function ShadowSelector(t: any, baseSelector: string): SSelector {

  return <SSelector>Selector(baseSelector)
    .addCustomMethods(
      {
        findShadowedElementText: (node, shadowedComponentSelectors: string[], elementSelector: string) => {
          let n: any = node;
          shadowedComponentSelectors.map((sel) => n = n!.querySelector(sel).shadowRoot!);
          n = n!.querySelector(elementSelector);
          return n!.innerText;
        },

        /**
         * Count the occurrence of an element
         * @param node
         * @param shadowedComponentSelectors
         * @param elementSelector
         */
        countComponents: (node, shadowedComponentSelectors: string[]) => {
          let n: any = node;
          shadowedComponentSelectors.map((sel, index) => {
            n = n!.querySelectorAll(sel);
            if (index !== shadowedComponentSelectors!.length - 1) n = n!.shadowRoot;
            return n;
          });
          return n!.length;
        }
      })
    .with({boundTestRun: t});
}


