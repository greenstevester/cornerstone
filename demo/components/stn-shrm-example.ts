import { html, property } from "@polymer/lit-element";
import { Stone } from "../../src/lib/stone";
import { StnShrmService } from "../app/stn-shrm.service";

export class ShowroomExample extends Stone {

  @property({attribute: false})
  service!: StnShrmService;
  @property({attribute: false})
  name!: string | null;

  connectedCallback() {
    this.service.registerSelectionWatcher((name) => {
      this.name = name
    })
  }

  render() {
    if (this.name) {
      let template = this.service.getExampleTemplate(this.name);
      if (template.getHTML()) {
        return html`
          ${this.renderStyles()}
          <h2><pre>${this.name}</pre></h2>
          <div class="example">
              ${template}
          </div>
          <pre class="code">${template.getHTML()}</pre>
          `
      } else {
        return html`
          ${this.renderStyles()}
          <h2><pre>${this.name}</pre></h2>
          ${template}
          `
      }
    } else {
      return html`
        ${this.renderStyles()}
        <div class="welcome">
            <h1>${this.service.getWelcome()}</h1>
            ${this.service.getWelcomeContent()}
        </div>
      `
    }
  }

  renderStyles() {
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
}
