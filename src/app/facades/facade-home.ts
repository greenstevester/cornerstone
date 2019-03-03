import { html } from "lit-element";

export const home = html`                         
                    <div class="row" id="banner">
                        <div class="column column-33">
                            <img src="images/noun_cubes_528121.svg" class="logo" alt="logo">
                        </div>
                        <div class="column-33">
                            <h1>CORNERSTONE</h1>
                            <h3>Modern SPAs built with web components...</h3>
                            <h3>... without frameworks</h3>
                        </div>
                    </div>
                    <div class="row" id="features">
                        <stn-card title="Control" class="column" height="35rem" icon="cube" icon-color="#202041" background="#49926B">
                            <ul>
                                <li>Focus on your problems and your code</li>
                                <li>Easily extend it</li>
                                <li>A sane starting point without framework or tooling lock-in</li>
                            </ul>
                        </stn-card>
                        <stn-card title="Web Standards" class="column" height="35rem" icon="cubes" icon-color="#202041" background="#49926B">
                            <p>Work with... not against the browser</p>
                        </stn-card>
                        <stn-card title="Modern JS" class="column" height="35rem" icon="cube" icon-color="#202041" background="#49926B">
                            <p>Code in Typescript and/or Javascript with all the latest features</p>
                        </stn-card>
                        </div>
                        <div class="row">
                        <stn-card title="Not a Framework!" class="column" height="35rem" icon="cube" icon-color="#202041" background="#49926B">
                            <p>A combination of the best tools, best practices, with standard setup</p>
                        </stn-card>
                        <stn-card title="Ready to Grow" class="column" height="35rem" icon="cubes" icon-color="#202041" background="#49926B">
                            <p>Carefully avoid framework, cli, or any other lock-inh</p>
                        </stn-card>
                        <stn-card title="????" class="column" height="35rem" icon="cube" icon-color="#202041" background="#49926B">
                            <p>???</p>
                        </stn-card>
                    </div>
`;
