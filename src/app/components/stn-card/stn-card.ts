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
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
        <style>
           div {
            height: ${this.height};
           }
        </style>
        <div>
        <span style="font-size: 48px; color: Dodgerblue;">
            <i class="fas fa-igloo"></i>
        </span>
            <img src="${this.imageUrl}"/>
            <h2>${this.title}</h2>
            <stn-card-body>
                <slot></slot>
            </stn-card-body>
        </div>
          `;
  }

}
