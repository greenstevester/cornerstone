import { html } from "lit-element";
import { TemplateResult } from "lit-html";
import { DynamicComponents } from "../app/components";
import { Features, startDemo } from "../cornerstone/showroom/app/showroom";
import { ActionFeature } from "./features/feature-action";
import { RouterFeature } from "./features/feature-router";
import { StylesFeature } from "./features/feature-styles";

//start the demo with examples
startDemo(initExamples());

//create examples
function initExamples() {
  DynamicComponents.await.card();

  let features = new Features("Cornerstone Features");
  
  features.setIntro('Welcome to the Cornerstone Feature Demo ', welcome);
  
  features
    .add('stn-card',
    (): TemplateResult => {
      DynamicComponents.await.card();
      return html`
        <div class="container">
            <div class="row">
              <stn-card title="The First" class="column"> this is content </stn-card>
              <stn-card title="The Second" class="column"> this is content </stn-card>
              <stn-card title="The Third" class="column"> this is content </stn-card>
            </div>
            
        </div>
`
    })
    .add('stn-hero')
    .add('stn-menu', () => {
      DynamicComponents.await.menu();
      return html`<stn-menu></stn-menu>`
    })
    .add('stn-action', ActionFeature.template, ActionFeature.properties)
    .add('router', RouterFeature.template, RouterFeature.properties)
    .add('styles', StylesFeature.template, RouterFeature.properties)
  
  ;
  return features;
}

function welcome(): TemplateResult {
  return html`
        <p>This is a demo environment for your project components</p>
        <lu>
          <li>It helps develop isolated components</li>
          <li>It helps document the project</li>
          <li>It provides an environment for integration tests</li>
        </lu>
      `
}


