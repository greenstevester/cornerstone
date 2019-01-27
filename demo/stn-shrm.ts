import { html, render } from "lit-html";
import { DemoService } from "./demo.service";
import { Menu } from "./stn-shrm-menu";

export function start() {
//init demo context
  Menu.define('stn-demo-menu');
  const service = new DemoService();


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
