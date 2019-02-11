import { css, html, property } from "lit-element";
import { Stone } from "../../../cornerstone/shared/stone";

export class CardElement extends Stone {

  @property()
  title = '';
  
  @property()
  imageUrl: string = '';

  constructor() {
    super();
    this.title = 'N/A';
  }
  
  static get styles() {
    return css`
    :host[hidden] {
        display: none;
    }

    :host {
        display: block;
    }

    h2 {
        color: var(--color-complement-4);
    }

    div {
        border: var(--dark) solid 0.25rem;
        padding: 1rem;
        margin: .25rem;
    }
    `
  }
  
  protected render(): any {
    return html`
<div class="column">
    <img src="${this.imageUrl}">
    <h2>${this.title}</h2>
    <stn-card-body>
        <slot></slot>
    </stn-card-body>
</div>
    `;
  }

}
