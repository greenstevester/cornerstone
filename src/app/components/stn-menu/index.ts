import { customElement, html, property, TemplateResult } from "lit-element";
import { classMap } from 'lit-html/directives/class-map.js';
import { Facade } from "../../../cornerstone/shared/Facade";
import { Router } from "../../../cornerstone/shared/Router";

const normal = {column: true, enabled: false};
const enabled = {column: true, enabled: true};


@customElement('stn-menu')
export class Menu extends Facade {
  
  @property({type: Object, attribute: false})
  public router: Router | undefined;
  
  @property({type: String, attribute: false})
  private hash: string = '';
  
  
  protected render(): TemplateResult | void {
    return html`
        <style>
            .enabled {
                color: var(--color-secondary-1-4)
            }
        </style>
       <div class="container">
            <div class="row">
                <button class=${classMap(this.isSelected(''))}      @click=${() => this.dispatch('')}>Home</button>
                <button class=${classMap(this.isSelected('stack'))} @click=${() => this.dispatch('stack')}>The Stack</button>
                <button class=${classMap(this.isSelected('story'))} @click=${() => this.dispatch('story')}>The Story</button>
                <button class=${classMap(this.isSelected('about'))} @click=${() => this.dispatch('about')}>About</button>
            </div>
       </div>
`;
  }
  
  private dispatch(hash: string) {
    this.hash = hash;
    this.router ? this.router.goto(hash) : null;
  }
  
  private isSelected(hash: string) {
    return this.router!.currentRoute() === hash ? enabled : normal
  }
}

export const define = function () {
  let menu = Menu;
};
