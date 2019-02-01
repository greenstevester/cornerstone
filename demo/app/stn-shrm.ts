import { html } from "@polymer/lit-element";
import { render } from "lit-html";
import { ShowroomExample } from "../components/stn-shrm-example";
import { Menu } from "../components/stn-shrm-menu";
import { Showroom } from "../components/stn-shrm-showroom";
import { StnShrmService } from "./stn-shrm.service";

export function startDemo(features: Features) {

  //init demo service
  Menu.define('stn-demo-menu');
  Showroom.define('stn-showroom');
  ShowroomExample.define('stn-demo-example');
  const service = new StnShrmService(features);

  //init app template

  const showroomApp = (service: StnShrmService) => {
    return html`
          <h1>${service.getTitle()}</h1>
          <stn-showroom .service=${service} class="container"></stn-showroom> 
      `;
  };

  //start app
  render(showroomApp(service), document.body);
}

export class Features {
  constructor(private title: string) {

  }

  features: Map<string, Function> = new Map<string, Function>();

  add(name: string, example: () => void) {
    this.features.set(name, example)
  }

  getTitle() {
    return this.title;
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
