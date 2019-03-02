import { html } from "lit-element";

export const home = html`                         
                    <div class="row" id="banner">
                        <div class="column column-33">
                            <img src="images/noun_building_1808.svg" class="logo" alt="logo">
                        </div>
                        <div class="column-33">
                            <h1>CORNERSTONE</h1>
                            <h3>Modern SPAs built with web components...</h3>
                            <h3>... without frameworks</h3>
                        </div>
                    </div>
                    <div class="row" id="features">
                        <stn-card title="Control" class="column column-33" height="35rem" icon="cube">
                            <ul>
                                <li>Focus on your problems and your code</li>
                                <li>Easily extend it</li>
                                <li>A sane starting point without framework or tooling lock-in</li>
                            </ul>
                        </stn-card>
                        <stn-card title="Web Standards" class="column column-33" height="35rem" icon="cube">
                            <p>Work with... not against the browser</p>
                        </stn-card>
                        <stn-card title="Modern JS" class="column column-33" height="35rem" icon="cube">
                            <p>Code in Typescript and/or Javascript with all the latest features</p>
                        </stn-card>
                        </div>
                        <div class="row">
                        <stn-card title="Not a Framework!" class="column column-33" height="35rem" icon="cube">
                            <p>A combination of the best tools, best practices, with standard setup</p>
                        </stn-card>
                        <stn-card title="Ready to Grow" class="column column-33" height="35rem" icon="cube">
                            <p>Carefully avoid framework, cli, or any other lock-inh</p>
                        </stn-card>
                        <stn-card title="????" class="column column-33" height="35rem" icon="cube">
                            <p>???</p>
                        </stn-card>
                    </div>
`;
