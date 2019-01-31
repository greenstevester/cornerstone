import { customElement, property, html } from "@polymer/lit-element";
import { Stone } from "../../src/lib/stone";
import { DemoService } from "../app/demo.service";

export class Menu extends Stone {

  @property({attribute: false})
  service!: DemoService;

  render() {
    const items = [];

    for (const name of this.service.getFeatureNames()) {
      items.push(html`<li><h3><pre><button @click="${() => this.choose(name)}">${name}</a></pre></h3></li>`);
    }

    return html`
        ${this.renderStyles()}
      <ul>
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
    }

    button:hover {
        color: darkgreen;

    }
    
    ul{
    border-right: dimgray solid .1rem;
    }
</style>
`
  }

  private choose(name: string) {
    this.service.setSelected(name)
  }

}
