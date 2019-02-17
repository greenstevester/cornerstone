import { html, TemplateResult } from "lit-html";
import { DynamicComponents } from "../../app/components";
import { ShowroomService } from "../../cornerstone/showroom/app/showroom.service";
import { ShowroomExample } from "../../cornerstone/showroom/components/stn-shrm-example";


export const ActionFeature = {template: template, properties: properties};

function template(element: ShowroomExample, srv: ShowroomService): TemplateResult {
  DynamicComponents.await.action();
  
  function select(selection: string) {
    element.set('selected', selection);
    element.requestUpdate()
  }
  
  let selected = element.get('selected');
  console.log(`selected:${selected}`);
  return html`
 <stn-action @click=${() => select('1')} ?active="${selected === '1'}">Action 1</stn-action>
 <stn-action @click=${() => select('2')} ?active="${selected === '2'}">Action 2</stn-action>
 <stn-action @click=${() => select('3')} ?active="${selected === '3'}">Action 3</stn-action>
 
 <div>${selected}</div>
`
}

function properties(element: ShowroomExample, srv: ShowroomService): Map<string, any> {
  let map = new Map<string, any>();
  map.set('selected', '');
  return map;
}






