import { customElement, property, html } from "@polymer/lit-element";
import { Stone } from "../../src/lib/stone";
import { DemoService } from "../app/demo.service";

export class Menu extends Stone {

  @property({attribute: false})
  service!: DemoService;

  render() {
    const items = [];

    for (const name of this.service.getFeatureNames()) {
      items.push(html`<li>${name}</li>`);
    }

    return html`
      <ul>
        ${items}
      </ul>
    `
  }

}
