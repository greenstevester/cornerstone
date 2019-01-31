import { DemoService } from "./demo.service";
import { ShowroomExample } from "../components/stn-shrm-example";
import { Menu } from "../components/stn-shrm-menu";
import { html } from "@polymer/lit-element";
import { render } from "lit-html";
import { Showroom } from "../components/stn-shrm-showroom";

export function demo(features: Features) {

  //init demo service
  Menu.define('stn-demo-menu');
  Showroom.define('stn-showroom');
  ShowroomExample.define('stn-demo-example');
  const service = new DemoService(features);

  //init app template

  const showroomApp = (service: DemoService) => {
    return html`
          <h1>Demo</h1>
          <stn-showroom .service=${service} class="container"></stn-showroom> 
      `;
  };

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
