import { html, TemplateResult } from "lit-html";
import { DynamicComponents } from "../../app/components";
import { WorkshopExample } from "../../cornerstone/workshop/components/ws-example";


export const HelloWorldFeature = {template: template, properties: properties};

function template(element: WorkshopExample): TemplateResult {
  DynamicComponents.await.hello();

  function toggle() {
    element.set('type', element.get('type') === 'friendly' ? 'polite' : 'friendly');
  }

  return html`<button @click=${() => toggle()}>change</button><stn-hello  type="${element.get('type')}">Mary</stn-hello>`;

}

function properties(): Map<string, any> {
  let properties = new Map<string, any>();
  properties.set('type', "friendly");

  return properties;
}





