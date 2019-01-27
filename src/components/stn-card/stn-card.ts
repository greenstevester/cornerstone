import { property, html } from "@polymer/lit-element";
import { Stone } from "../../lib/stone";

export class CardElement extends Stone {

  @property()
  title = '';

  constructor() {
    super();
    this.title = 'foo';
  }

  protected render(): any {
    return html`
      <div>
        <h2>${this.title}</h2>
        <stn-card-body>
            <slot></slot>
        </stn-card-body>
      </div>
    `;
  }

}
