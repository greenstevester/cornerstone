import { html } from "lit-element";

export const home = html`
            <div class="container">
              <div class="row logo-section">
                  <img src="images/noun_building_1808.svg" class="logo" alt="logo">
              </div>
              <div class="row">
                <div class="column">
                    <h1>CORNERSTONE</h1>
                    <h3>A modern demonstration using Web Components to build single page applications!</h3>
                    <ul>
                        <li>Focus on your problems and your code</li>
                        <li>Follow web standards</li>
                        <li>Easily extend it</li>
                        <li>A sane starting point without framework or tooling lock-in</li>
                        <li>Makes it possible to manage a performance budget in your apps</li>
                    </ul>
                <div>
              </div>
                <div class="row">
                    <stn-card title="Web Standards" class="column">
                        <p>Work with... not against the browser</p>
                    </stn-card>
                    <stn-card title="Modern JS" class="column">
                        <p>Code in Typescript and/or Javascript with all the latest features</p>
                    </stn-card>
                    <stn-card title="Not a Framework!" class="column">
                        <p>A combination of the best tools, best practices, with standard setup</p>
                    </stn-card>
                    <stn-card title="Ready to Grow" class="column">
                        <p>Carefully avoid framework, cli, or any other lock-inh</p>
                    </stn-card>
                </div>
                <div class="row">
                   <h5><img src="images/Cc.logo.circle.svg" class="attribution" alt="creative commons">
                      building by Antonis Makriyannis from the Noun Project
                  </h5>
                </div>
            </div>
`;
