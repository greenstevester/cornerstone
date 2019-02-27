import { html, TemplateResult } from "lit-html";
import { DynamicComponents } from "../../app/components";
import { WorkshopExample } from "../../cornerstone/workshop/components/ws-example";


export const ActionFeature = {template: template, properties: properties};

function template(element: WorkshopExample): TemplateResult {
  DynamicComponents.await.action();

  function select(selection: string) {
    element.set('selected', selection);
    element.requestUpdate()
  }

  let selected = element.get('selected');
  console.log(`selected:${selected}`);
  return html`<div class="container">
    <div class="row">
        <stn-action class="column-33" @click=${() => select('1')} ?active="${selected === '1'}">Action 1</stn-action>
        <stn-action class="column-33" @click=${() => select('2')} ?active="${selected === '2'}">Action 2</stn-action>
        <stn-action class="column-34" @click=${() => select('3')} ?active="${selected === '3'}">Action 3</stn-action>
    </div>
</div>
<div>${selected}</div>
`
}

function properties(): Map<string, any> {
  let map = new Map<string, any>();
  map.set('selected', '');
  return map;
}






