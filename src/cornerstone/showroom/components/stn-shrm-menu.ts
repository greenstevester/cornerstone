import { customElement, html, LitElement, property } from "lit-element";
import { ShowroomService } from "../app/showroom.service";

@customElement('stn-demo-menu')
export class Menu extends LitElement {

  @property({attribute: false})
  service!: ShowroomService;

  render() {
    const items = [];

    for (const name of this.service.getFeatureNames()) {
      items.push(html`<li><h3><pre><button @click="${() => this.choose(name)}">${name}</a></pre></h3></li>`);
    }

    return html`
      ${Menu.renderStyles()}
      <h2>${this.service.getTitle()}</h2>
      <ul>
        <li><h3><button @click="${() => this.choose('')}">home</a></h3></li>
        ${items}
      </ul>
    `
  }

  static renderStyles() {
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
        color: var(--color-secondary-1-2);
    }
    
</style>
`
  }

  private choose(name: string) {
    this.service.setSelected(name)
  }

}
