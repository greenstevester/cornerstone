import { property } from "@polymer/lit-element";
import { html, TemplateResult } from "lit-html";
import { Stone } from "../../src/lib/stone";
import { DemoService } from "../app/demo.service";

export class Showroom extends Stone {

  @property({attribute: false})
  service!: DemoService;

  @property({attribute: false})
  private selectedExample: string = 'stn-card';

  protected render(): TemplateResult | void {
    return html`
          <div class="row">
              <stn-demo-menu class="column-10" .service="${this.service}"></stn-demo-menu>
              <div class="column-90">
              <div class="container">
                  <div class="row">
                      <stn-demo-example class="column" .service="${this.service}"></stn-demo-example>
                  </div>
                  <div class="row">
                      <stn-demo-events class="column" .service="${this.service}"></stn-demo-events>
                  </div>
              </div>
          </div>
    `
  }


  createRenderRoot(): Element | ShadowRoot {
    return this;
  }

}
