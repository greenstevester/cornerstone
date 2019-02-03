import { html } from "@polymer/lit-element";
import { TemplateResult } from "lit-html";
import { DynamicComponents } from "../app/components";
import { Features, startDemo } from "../lib/showroom/app/showroom";
import { routerFeature } from "./features/feature-router";

//start the demo with examples
startDemo(initExamples());

//create examples
function initExamples() {
  DynamicComponents.await.all();

  let features = new Features("Cornerstone Features");
  
  features.setIntro('Welcome to the Cornerstone Feature Demo', welcome);

  features.add('stn-card',
    (): TemplateResult => {return html` <stn-card title="the tile"> this is content </stn-card> `})
    .add('stn-hero', (): TemplateResult => {return html``})
    .add('stn-header', (): TemplateResult => {return html``})
    .add('stn-footer', () => {return html``})
    .add('router', routerFeature.template, routerFeature.properties)
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


