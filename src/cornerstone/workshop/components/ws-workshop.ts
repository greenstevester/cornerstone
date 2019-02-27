import { customElement, property } from "lit-element";
import { html, TemplateResult } from "lit-html";
import { Facade } from "../../shared/Facade";
import { FeatureService } from "../feature/feature.service";

@customElement('ws-workshop')
export class Workshop extends Facade {

  @property({attribute: false})
  service!: FeatureService;

  constructor(){
    super();
  }

  protected render(): TemplateResult | void {
    return html`
<!--    <div class="container">-->
        <div class="row">
            <ws-menu id="sidebar-content" class="column-20" .service="${this.service}"></ws-menu>        
            <ws-example id="main-content" class="column" .service="${this.service}" foo="bar"></ws-example>
        </div>
<!--    </div>-->
    `
  }

}
