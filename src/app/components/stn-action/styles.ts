import { css } from "lit-element";

export const styles = css`
                        button{
                            background: none;
                            border: none;
                            color: var(--color-complement-4);
                            margin-bottom: .875rem;
                        }
                        
                        button:hover {
                            border-bottom: var(--color-complement-4) solid .125rem;
                            margin-bottom: .875rem;
                        }
                        
                        button.active {
                            /*font-style: italic;*/
                            color: var(--color-secondary-1-4);
                            border-bottom: var(--color-secondary-1-4) solid .125rem;
                            margin-bottom: .875rem;
                        }
                    `;
