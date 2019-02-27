import { customElement, html, property, TemplateResult } from "lit-element";
import { classMap } from "lit-html/directives/class-map";
import { baseComponentCss, Stone } from "../../../cornerstone/shared/Stone";
import { styles } from "./styles";

@customElement('stn-action')
export class Action extends Stone {
  
  static styles = [baseComponentCss, styles];
  
  @property({type: Boolean})
  public active = false;
  
  constructor() {
    super()
  }
  
  protected render(): TemplateResult {
    const mergedClasses = {active: this.active};
    return html`
       <button class=${classMap(mergedClasses)}><slot></slot></button>
    `;
  }
}

export const define = function () {
  let action = Action;
};
