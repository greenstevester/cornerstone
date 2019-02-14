import { css, customElement, html, LitElement, property } from "lit-element";

@customElement('stn-card')
export class CardElement extends LitElement {

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
    
    `
  }
  
  protected render(): any {
    
    return html`
          <div>
              
              <img src="${this.imageUrl}" alt="card image">
              <h2>${this.title}</h2>
              <stn-card-body>
                  <slot></slot>
              </stn-card-body>
          </div>
          `;
  }

}
