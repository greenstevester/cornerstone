import { html, property } from "@polymer/lit-element";
import { Stone } from "../../src/lib/stone";
import { StnShrmService } from "../app/stn-shrm.service";

export class Menu extends Stone {

  @property({attribute: false})
  service!: StnShrmService;

  render() {
    const items = [];

    for (const name of this.service.getFeatureNames()) {
      items.push(html`<li><h3><pre><button @click="${() => this.choose(name)}">${name}</a></pre></h3></li>`);
    }

    return html`
      ${this.renderStyles()}     
      <h2>${this.service.getTitle()}</h2>
      <ul>
        <li><h3><button @click="${() => this.choose(null)}">home</a></h3></li>
        ${items}
      </ul>
    `
  }

  renderStyles() {
    return html`<style>
    :host[hidden] {
        display: none;
    }

    :host {
        display: block;
    }

    button {
        background: none;
        border: none;
        font-size: 2rem;
        color: var(--white) ;
    }

    button:hover {
        color: var(--color-complement-4);
    }
    
</style>
`
  }

  private choose(name: string | null) {
    this.service.setSelected(name)
  }

}
