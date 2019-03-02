import { css } from "lit-element";

export const styles = css`                        
                        :host {
                            display: block; 
                            font-family: 'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
                            font-size: 1.6em;
                            font-weight: 300;
                            letter-spacing: .01em;
                            line-height: 1.6;
                            -moz-box-shadow:    0.5rem 0.5rem 0.25rem 0 var(--color-secondary-2-0);
                            -webkit-box-shadow: 0.5rem 0.5rem 0.25rem 0 var(--color-secondary-2-0);
                            box-shadow:         0.5rem 0.5rem 0.25rem 0 var(--color-secondary-2-0);
                            border: var(--color-secondary-2-4) solid 0.26rem;
                            padding: 1rem;
                            margin: 2rem;
                        }
                        
                        h2 {
                            color: var(--color-complement-4);
                            margin-top: 0;
                            margin-bottom: 0;
                        }
                        
                        i {
                            font-family: small-set;
                            font-style: normal;
                            font-size: 4rem;
                       
                        }
                        
                        h2, stn-card-body, span, i {
                            text-align: center;
                        }
                        

                        .icon-row{
                            height: 8rem; 
                            margin-top: 2rem;
                        }
                        
                        .center-container {
                          height: 100%;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                        }
                        
                        .icon-circle { 
                          width: 7rem; 
                          height: 7rem; 
                          border: var(--color-secondary-2-4) solid 0.26rem;
                          border-radius: 50%;
                          text-align: center;
                          
                        }
                        
                        stn-card-body {
                            font-size: 2rem;
                        }
                        
                                                
                        .icon-emo-happy:before { content: '\\e800'; } /* '' */
                        .icon-map:before { content: '\\e801'; } /* '' */
                        .icon-emo-unhappy:before { content: '\\e802'; } /* '' */
                        .icon-thumbs-up:before { content: '\\e803'; } /* '' */
                        .icon-resize-normal:before { content: '\\e804'; } /* '' */
                        .icon-snow-heavy-inv:before { content: '\\e805'; } /* '' */
                        .icon-hash:before { content: '\\f029'; } /* '' */
                        .icon-beaker:before { content: '\\f0c3'; } /* '' */
                        .icon-cube:before { content: '\\f1b2'; } /* '' */
                        .icon-cubes:before { content: '\\f1b3'; } /* '' */
                        .icon-hourglass-2:before { content: '\\f252'; } /* '' */
                        
                        
                        
                        
                        
                       
                        
                      
                        
                    
`;
