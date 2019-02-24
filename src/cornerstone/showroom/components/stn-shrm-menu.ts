import { customElement, html, property } from "lit-element";
import { Facade } from "../../shared/Facade";
import { baseComponentCss } from "../../shared/Stone";
import { FeatureService } from "../feature/feature.service";

@customElement('stn-demo-menu')
export class Menu extends Facade {

  static styles = [
    baseComponentCss,

  ];
  @property({attribute: false})
  service!: FeatureService;

  render() {
    const items = [];

    for (const name of this.service.getFeatureNames()) {
      items.push(html`<li><button @click="${() => this.choose(name)}">${name}</button></li>`);
    }

    return html`
      
      <h2>${this.service.getTitle()}</h2>
      <ul>
        <li><button @click="${() => this.choose('')}">home</button></li>
        ${items}
      </ul>
    `
  }

  private choose(name: string) {
    this.service.setSelected(name)
  }

}
