import { customElement, html } from "lit-element";
import { Stone } from "../../../cornerstone/shared/Stone";

@customElement('stn-card-body')
export class CardBodyElement extends Stone {
  
  constructor() {
    super();
    this.requestUpdate()
  }
  
  
  protected render(): any {
    return html`
            <slot></slot>
    `;
  }
}

