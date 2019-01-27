import { Stone } from "../../lib/stone";
import { html } from "@polymer/lit-element";

export class CardBodyElement extends Stone {

  connectedCallback() {
    this.requestUpdate();
  }

  protected render(): any {
    return html`
            <slot></slot>
    `;
  }
}

