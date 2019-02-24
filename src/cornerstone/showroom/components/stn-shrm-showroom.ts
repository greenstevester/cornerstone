import { customElement, property } from "lit-element";
import { html, TemplateResult } from "lit-html";
import { Facade } from "../../shared/Facade";
import { FeatureService } from "../feature/feature.service";

@customElement('stn-showroom')
export class Showroom extends Facade {

  @property({attribute: false})
  service!: FeatureService;

  constructor(){
    super();
  }

  protected render(): TemplateResult | void {
    return html`
<!--    <div class="container">-->
        <div class="row">
            <stn-demo-menu id="sidebar-content" class="column-20" .service="${this.service}"></stn-demo-menu>        
            <stn-demo-example id="main-content" class="column-70" .service="${this.service}" foo="bar"></stn-demo-example>
        </div>
<!--    </div>-->
    `
  }

}
