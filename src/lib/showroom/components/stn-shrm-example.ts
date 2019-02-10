import { customElement, html, LitElement, property, TemplateResult } from "lit-element";
import { StnShrmService } from "../app/stn-shrm.service";

@customElement('stn-demo-example')
export class ShowroomExample extends LitElement {

  @property({attribute: false})
  service!: StnShrmService;
  
  @property({type: String})
  name = '';
  
  @property({type: String})
  foo = '';
  
  @property({attribute: false, type: Object})
  exampleProps = new Map<string, any>();
  
  constructor() {
    super();
    this.name = '';
    
    
  }
  
  updated(changedProperties: any) {
    changedProperties.forEach((oldValue: any, propName: any) => {
      if (propName === 'service' && oldValue === undefined) {
        this.service.registerSelectionWatcher((name) => {
          this.name = name;
          if (name) this.exampleProps = this.service.getProperties(name)(this);
        });
      }
    });
  }
  
  
  render(): TemplateResult | void {
    if (this.name) {
      let template = this.service.getExampleTemplate(this.name, this);
      if (template.getHTML()) {
        return html`
          ${ShowroomExample.renderStyles()}
          <h2><pre>${this.name}</pre></h2>
          <div class="example">
              ${template}
          </div>
          <pre class="code">${template.getHTML()}</pre>
          `
      } else {
        return html`
          ${ShowroomExample.renderStyles()}
          <h2><pre>${this.name}</pre></h2>
          ${template}
          `
      }
    } else {
      return html`
        ${ShowroomExample.renderStyles()}
        <div class="welcome">
            <h1>${this.service.getWelcome()}</h1>
            ${this.service.getWelcomeContent()}
        </div>
      `
    }
  }

  static renderStyles() {
    return html`<style>
    :host[hidden] {
        display: none;
    }

    :host {
        display: block;
    }

    .code {
        border: dimgray solid .1rem;
        background: lightgrey;
        padding-left: 2rem;
        padding-right: 2rem;;
    }

    .example {
        border: dimgray solid .05rem;
        padding: 3rem 2rem;
        margin-bottom: 2rem
        margin-top: 2rem

    }
    
    .welcome {
        margin: 1rem;
    }
</style>
`
  }

  set(key: string, val: any) {
    let props = this.exampleProps;
    const newProps = new Map(props);
    newProps.set(key, val);
    this.exampleProps = newProps;
  }

  get(key: string) {
    return this.exampleProps.get(key);
  }

  
}
