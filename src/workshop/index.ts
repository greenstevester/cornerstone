import { html } from "lit-element";
import { TemplateResult } from "lit-html";
import { DynamicComponents } from "../app/components";
import { Features, startWorkshop } from "../cornerstone/workshop";
import { ActionFeature } from "./features/feature-action";
import { HelloWorldFeature } from "./features/feature-hello-world";
import { RouterFeature } from "./features/feature-router";

//start the workshop
startWorkshop(initExamples());

//create features
function initExamples() {

  let features = new Features("Workshop");

  features.setIntro('Welcome to the Cornerstone Workshop ', welcome);

  features
    .add('Getting Started')
    .add(
      'Hello World',
      HelloWorldFeature.template,
      HelloWorldFeature.properties)
    .add('Web Site Components')
    .add(
      'stn-card',
      (): TemplateResult => {
        DynamicComponents.await.card();
        return html`
              <div class="row">
                <stn-card title="The First"  class="column" height="35rem"> this is content </stn-card>
                <stn-card title="The Second" class="column" height="35rem"> this is content </stn-card>
                <stn-card title="The Third"  class="column" height="35rem"> this is content </stn-card>
              </div>
              `
    })
    .add(
      'stn-action',
      ActionFeature.template,
      ActionFeature.properties)
    .add(
      'router',
      RouterFeature.template,
      RouterFeature.properties)
    .add(
      'stn-markdown',
      (): TemplateResult => {
        DynamicComponents.await.markdown();
        return html`<stn-markdown></stn-markdown>`
    })
  ;

  return features;
}

function welcome(): TemplateResult {
  return html`
        <p>This is a workshop for your project components</p>
        <lu>
          <li>It helps develop isolated components</li>
          <li>It helps document the project</li>
          <li>It provides an environment for integration tests</li>
        </lu>
      `
}


