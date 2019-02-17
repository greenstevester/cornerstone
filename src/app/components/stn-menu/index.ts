import { customElement, html, property, TemplateResult } from "lit-element";
import { Facade } from "../../../cornerstone/shared/Facade";
import { Router } from "../../../cornerstone/shared/Router";


@customElement('stn-menu')
export class Menu extends Facade {
  
  @property({type: Object, attribute: false})
  public router: Router | undefined;
  
  @property({type: String, attribute: false})
  private hash: string = '';
  
  
  protected render(): TemplateResult | void {
    return html`
       <div class="container">
            <div class="row">
                <stn-action class='column' @click=${() => this.dispatch('')} ?active="${this.isSelected('')}">Home</stn-action>
                <stn-action class='column' @click=${() => this.dispatch('stack')} ?active="${this.isSelected('stack')}">The Stack</stn-action>
                <stn-action class='column' @click=${() => this.dispatch('story')} ?active="${this.isSelected('story')}">The Story</stn-action>
                <stn-action class='column' @click=${() => this.dispatch('about')} ?active="${this.isSelected('about')}">About</stn-action>
            </div>
       </div>
`;
  }
  
  private dispatch(hash: string) {
    this.hash = hash;
    this.router ? this.router.goto(hash) : null;
  }
  
  private isSelected(hash: string) {
    return Router.currentRoute() === hash
  }
}

export const define = function () {
  let menu = Menu;
};
