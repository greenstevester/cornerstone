import { html, TemplateResult } from "lit-html";
import { Router } from "../../lib/router";
import { ShowroomExample } from "../../lib/showroom/components/stn-shrm-example";

let router: Router;

export const routerFeature = {template: template, properties: properties};

function template(element: ShowroomExample): TemplateResult{
  return html`
<ul>
    <li><button @click=${() => jumpTo('a')}>View A</button></li>
    <li><button @click=${() => jumpTo('b')}>View B</button></li>
    <li><button @click=${() => jumpTo('c')}>View C</button></li>
</ul>
<span>You last pressed: ${element.get('msg')}</span>
      `
}

function jumpTo(route: string) {
  router.goto(route)
}

function properties(element: ShowroomExample):Map<string, any> {
  let properties = new Map<string, any>();
  router = new Router(window.location.href,() =>{element.set('msg','N/A')});

  properties.set('msg', "N/A");

  router.add('a', () => {element.set('msg', 'Content A');});
  router.add('b', () => {element.set('msg', 'Content B');});
  router.add('c', () => {element.set('msg', 'Content C');});

  return properties;
}





