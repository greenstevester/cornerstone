import { TemplateResult } from "lit-html";
import { DynamicComponents } from "../src/app/components";
import { Features, demo } from "./app/stn-shrm";
import { html } from "@polymer/lit-element";

// import 'index.css';

//init app components to be demo'ed
DynamicComponents.await.all();

//create demo content
let features = new Features();
features.add(
  'stn-card',
  (): TemplateResult => {
    return html`
              <stn-card title="the tile">
                 this is content 
              </stn-card>
              `
  });

//start demo app
demo(features);



