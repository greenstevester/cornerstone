import { Stone } from "../lib/stone";
import { html } from "@polymer/lit-element";

export class ViewApp extends Stone {

  connectedCallback() {
    console.log('app started');
    this.requestUpdate()
  }

  render() {
    return html`
    <div class="logo-section">
        <img src="images/noun_building_1808.svg" class="logo">
    </div>
    <div class="main-section">
        <h1>CORNERSTONE</h1>
        <h3>Modern JS/TS seed project for building the right things right!</h3>

        <h5><img src="images/Cc.logo.circle.svg" class="attribution" alt="creative commons">
            building by Antonis Makriyannis from the Noun Project
        </h5>
        <div >

        </div>
    </div>
            <stn-card title="Modern JS/TS">
                <p>Code in Typescript and/or Javascript with all the latest features</p>
            </stn-card>
            <stn-card title="Lit-Element">
                <p>Lightweight component model provided by the polymer project</p>
            </stn-card>
            <stn-card title="Lit-HTML">
                <p>Lightweight and fast template rendering provided by the polymer project</p>
            </stn-card>
            <stn-card title="Webpack">
                <p>A webpack config ready for production so you won't have to fight 'the man' when it turns out that transpiling for the real world breaks your world</p>
                <p>chunking and dynamic module loading ready to be used</p>
            </stn-card>
`
  }

  createRenderRoot() {
    return this
  }
}

ViewApp.tagname = 'view-app';
