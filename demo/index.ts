import { html } from "@polymer/lit-element";
import { TemplateResult } from "lit-html";
import { DynamicComponents } from "../src/app/components";
import { startDemo, Features } from "./app/stn-shrm";

//start the demo with examples
startDemo(initExamples());

//create examples
function initExamples() {
  DynamicComponents.await.all();

  let features = new Features("Cornerstone Feature Demo");

  features.add('stn-card',
    (): TemplateResult => {
      return html`
<stn-card title="the tile">
   this is content 
</stn-card>
              `
    });

  features.add('stn-hero',
    (): TemplateResult => {
      return html``
    });

  features.add('stn-header',
    (): TemplateResult => {
      return html``
    });

  features.add('stn-footer',
    (): TemplateResult => {
      return html``
    });
  return features;
}



