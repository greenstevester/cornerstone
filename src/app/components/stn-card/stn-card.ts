import { customElement, html, property } from "lit-element";
import { baseComponentCss, Stone } from "../../../cornerstone/shared/Stone";
import { styles } from "./css";

@customElement('stn-card')
export class CardElement extends Stone {

  @property()
  title = '';

  @property()
  icon: string = '';

  @property({attribute: 'icon-color'})
  iconColor: string = '';

  @property()
  background: string = '#9c9c9c';

  @property({})
  height: string = '';

  static styles = [baseComponentCss, styles];

  constructor() {
    super();
    this.title = 'N/A';
  }

  protected render(): any {
    let icon = html`
             <div class="row icon-row center-container" >
                <div class="icon-circle center-container">
                    <i class="demo-icon icon-${this.icon}"></i>
                </div>
            </div>
    `;

    return html`
        <style>
           :host {
                height: ${this.height};
                background: ${this.background};
           }
            i {
                color: ${this.iconColor};
            }
        </style>
        <div>
            ${this.icon ? icon : html``}
            <div class="row">
               <h2>${this.title}</h2>
            </div>
            <stn-card-body class="row">
                <slot></slot>
            </stn-card-body>
        </div>
          `;
  }

}
