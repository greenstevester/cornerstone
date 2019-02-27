import { customElement, html, property } from "lit-element";
import { baseComponentCss, Stone } from "../../../cornerstone/shared/Stone";
import { styles } from "./css";

@customElement('stn-card')
export class CardElement extends Stone {

  @property()
  title = '';

  @property()
  imageUrl: string = '';

  @property({})
  height: string = '';

  static styles = [baseComponentCss, styles];

  constructor() {
    super();
    this.title = 'N/A';
  }

  protected render(): any {
    return html`
        <style>
           div {
            height: ${this.height};
           }
        </style>
        <div>
            <img src="${this.imageUrl}"/>
            <h2>${this.title}</h2>
            <stn-card-body>
                <slot></slot>
            </stn-card-body>
        </div>
          `;
  }

}
