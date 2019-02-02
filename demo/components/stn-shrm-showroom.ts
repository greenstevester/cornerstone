import { property } from "@polymer/lit-element";
import { html, TemplateResult } from "lit-html";
import { Stone } from "../../src/lib/stone";
import { StnShrmService } from "../app/stn-shrm.service";

export class Showroom extends Stone {

  @property({attribute: false})
  service!: StnShrmService;

  @property({attribute: false})
  private selectedExample: string = 'stn-card';

  protected render(): TemplateResult | void {
    return html`
    <style>
        #container {
            height: 100%;
        }
    
        #sidebar {
            display: inline-block;
            vertical-align: top;
            height: 100%;
            width: 18%;
            overflow: auto;
            background: var(--color-secondary-1-0);
        }
    
        #content {
            display: inline-block;
            vertical-align: top;
            height: 100%;
            width: 82%;
            overflow: auto;
            background: var(--white);
        }
        
        stn-demo-example {
            color: var(--black);
            
        }
        stn-demo-example {
            margin: 2rem;
        }
    </style>
    
    <div id="container">
        <div id="sidebar">
            <stn-demo-menu id="sidebar-content" .service="${this.service}"></stn-demo-menu>
        </div><!--
--><div id="content">
            <stn-demo-example id="main-content" .service="${this.service}"></stn-demo-example>
        </div>
    </div>
    `
  }


  createRenderRoot(): Element | ShadowRoot {
    return this;
  }

}
