import { css } from "lit-element";

export const styles = css`
                        button{
                            background: none;
                            border: none;
                            color: var(--white);
                            margin-bottom: .875rem;
                            font-size: 2rem;
                        }
                        
                        button:hover {
                            border-bottom: var(--color-secondary-1-1) solid .125rem;
                            margin-bottom: .875rem;
                        }
                        
                        button.active {
                            /*font-style: italic;*/
                            color: var(--color-secondary-1-2);
                            border-bottom: var(--color-secondary-1-2) solid .125rem;
                            margin-bottom: .875rem;
                        }
                    `;
