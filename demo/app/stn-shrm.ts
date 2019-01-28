import { DemoService } from "./demo.service";
import { ShowroomExample } from "../components/stn-shrm-example";
import { Menu } from "../components/stn-shrm-menu";
import { html } from "@polymer/lit-element";
import { render } from "lit-html";

export function demo(features: Features) {

  //init demo service
  Menu.define('stn-demo-menu');
  ShowroomExample.define('stn-demo-example');
  const service = new DemoService(features);

  //init app template
  const showroomApp = (service: DemoService) => html`
        <h1>Demo</h1>
        <stn-demo-menu .service="${service}"> </stn-demo-menu>
        <stn-demo-example .service="${service}"> </stn-demo-example>
        <stn-demo-events .service="${service}"></stn-demo-events>
    `;

  //start app
  render(showroomApp(service), document.body);
}

export class Features {
  features: Map<string, Function> = new Map<string, Function>();

  add(name: string, example: () => void) {
    this.features.set(name, example)
  }

  getAll() {
    return this.features.keys()
  }

  get(name: string): Function {
    let fn = this.features.get(name);
    if (fn != null) {
      return fn;
    } else {
      throw Error(`no function found for: ${name}`)
    }
  }
}
