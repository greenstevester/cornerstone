import { html, TemplateResult } from "lit-html";
import { ShowroomExample } from "../../cornerstone/showroom/components/stn-shrm-example";
import { FeatureService } from "../../cornerstone/showroom/feature/feature.service";


export const StylesFeature = {template: template, properties: properties};

function template(element: ShowroomExample, srv: FeatureService): TemplateResult {


  return html`
  

      `
}

function properties(element: ShowroomExample, srv: FeatureService): Map<string, any> {
  return new Map<string, any>();
}





