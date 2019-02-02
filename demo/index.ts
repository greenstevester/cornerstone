import { html } from "@polymer/lit-element";
import { TemplateResult } from "lit-html";
import { DynamicComponents } from "../src/app/components";
import { Features, startDemo } from "./app/stn-shrm";

//start the demo with examples
startDemo(initExamples());

//create examples
function initExamples() {
  DynamicComponents.await.all();

  let features = new Features("Cornerstone Features");

  features.setIntro('Welcome to the Cornerstone Feature Demo',
    (): TemplateResult => {
      return html`
        <p>This is a demo environment for your project components</p>
        <lu>
          <li>It helps develop isolated components</li>
          <li>It helps document the project</li>
          <li>It provides an environment for integration tests</li>
        </lu>
      `
    }
  );

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



