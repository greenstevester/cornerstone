import { customElement, html, LitElement } from "lit-element";

@customElement('stn-card-body')
export class CardBodyElement extends LitElement {

  connectedCallback() {
    this.requestUpdate();
  }

  protected render(): any {
    return html`
            <slot></slot>
    `;
  }
}

