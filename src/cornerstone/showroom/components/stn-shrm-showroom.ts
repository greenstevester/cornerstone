import { css, customElement, LitElement, property } from "lit-element";
import { html, TemplateResult } from "lit-html";
import { ShowroomService } from "../app/showroom.service";

@customElement('stn-showroom')
export class Showroom extends LitElement {

  @property({attribute: false})
  service!: ShowroomService;

  constructor(){
    super();
  }
  
  static get styles() {
    return css`
        :host[hidden] {
            display: none;
        }
        
        :host {
            display: block;
        }
        
        #container {
            height: 100%;
        }
        
        #sidebar {
            display: inline-block;
            vertical-align: top;
            height: 100%;
            width: 18%;
            overflow: auto;
            background: var(--color-complement-4);
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
            `;
  }
  
  protected render(): TemplateResult | void {
    return html`
    <div id="container">
        <div id="sidebar">
            <stn-demo-menu id="sidebar-content" .service="${this.service}"></stn-demo-menu>
        </div><!--
--><div id="content">
            <stn-demo-example id="main-content" .service="${this.service}" foo="bar"></stn-demo-example>
        </div>
    </div>
    `
  }

}
