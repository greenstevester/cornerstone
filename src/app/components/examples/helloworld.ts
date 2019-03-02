import { customElement, html, property } from "lit-element";
import { Stone } from "../../../cornerstone/shared/Stone";

@customElement('stn-hello')
export class HelloWorld extends Stone {

  @property()
  type: "friendly" | "polite" = "friendly";

  constructor() {
    super();
  }

  render() {
    return html`
        <h1>${this.type === 'friendly' ? "Hi " : "Good day to you "}<slot></slot></h1>
    `
  }
}
