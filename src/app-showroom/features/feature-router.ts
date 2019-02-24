import { html, TemplateResult } from "lit-html";
import { ShowroomExample } from "../../cornerstone/showroom/components/stn-shrm-example";
import { FeatureService } from "../../cornerstone/showroom/feature/feature.service";


export const RouterFeature = {template: template, properties: properties};

function template(element: ShowroomExample, srv: FeatureService): TemplateResult {
  function jumpTo(route: string) {
    srv.routeTo(route)
  }

  return html`
<ul>
    <li><button @click=${() => jumpTo('router/a')}>View A</button></li>
    <li><button @click=${() => jumpTo('router/b')}>View B</button></li>
    <li><button @click=${() => jumpTo('router/c')}>View C</button></li>
</ul>
<span>You last pressed: ${element.get('msg')}</span>
      `
}

function properties(element: ShowroomExample, srv: FeatureService): Map<string, any> {
  let properties = new Map<string, any>();

  properties.set('msg', "N/A");

  srv.addRoute('router/a', () => {element.set('msg', 'Content A');});
  srv.addRoute('router/b', () => {element.set('msg', 'Content B');});
  srv.addRoute('router/c', () => {element.set('msg', 'Content C');});

  return properties;
}





