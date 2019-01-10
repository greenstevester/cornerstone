import { property, html } from "@polymer/lit-element";
import { BaseElement } from "../../lib/base-element";

export class FeatureElement extends BaseElement {

  @property()
  title='';


  constructor() {
    super();
    this.title = 'foo';
  }

  protected render(): any {
    console.log('rendering');
    return html`
      <div>
        <h2>${this.title}</h2>
      </div>
    `;
  }

}

FeatureElement.tagname = 'stn-feature';
