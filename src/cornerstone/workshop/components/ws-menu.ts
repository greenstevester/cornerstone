import { customElement, html, property } from "lit-element";
import { Facade } from "../../shared/Facade";
import { baseComponentCss } from "../../shared/Stone";
import { FeatureService } from "../feature/feature.service";

@customElement('ws-menu')
export class WorkshopMenu extends Facade {

  static styles = [
    baseComponentCss,

  ];
  @property({attribute: false})
  service!: FeatureService;

  render() {
    const items = [];

    for (const name of this.service.getFeatureNames()) {
      if (this.service.isSection(name)) {
        items.push(html`<li style="font-style: italic"><h5>${name}</h5> </li>`);
      } else {
        items.push(html`<li><button @click="${() => this.choose(name)}">${name}</button></li>`);
      }
    }

    return html`
      <style>
        h5 {
            color: var(--color-secondary-1-1);
            font-weight: bolder ;
        }
      </style>
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
