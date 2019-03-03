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
            <style>
                :host{
                    box-sizing: content-box;
                }
                stn-action{
                   font-size: 2rem;
                }
                .row {
                    /*padding: 0;*/
                    /*margin:0;*/
                }
                
                stn-menu .container {
                  /*margin-bottom: 5rem;*/
                }
                
                .menu {
                  background: var(--dark);
                  padding-top: 2rem;
                  padding-bottom: 0.3rem;
                  border-bottom: var(--color-secondary-1-2) solid 0.3rem;
                }
            </style>
            <div class="row menu">
            <div class="container">
            <div class="row">
                <div class='column column-10 column-offset-50' >&nbsp;</div>
                <stn-action class='column column-10' @click=${() => this.dispatch('')} ?active="${this.isSelected('')}">Home</stn-action>
                <stn-action class='column column-10' @click=${() => this.dispatch('stack')} ?active="${this.isSelected('stack')}">The Stack</stn-action>
                <stn-action class='column column-10' @click=${() => this.dispatch('story')} ?active="${this.isSelected('story')}">The Story</stn-action>
                <stn-action class='column column-10' @click=${() => this.dispatch('about')} ?active="${this.isSelected('about')}">About</stn-action>
            </div>
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
