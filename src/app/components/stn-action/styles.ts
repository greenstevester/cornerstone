import { css } from "lit-element";

export const styles = css`
                        button{
                            background: none;
                            border: none;
                            color: var(--color-complement-4);
                        }
                        
                        button:hover {
                            border-bottom: var(--color-complement-4) solid .25rem;
                        }
                        
                        button.active {
                            color: var(--color-secondary-1-4)
                        }
                    `;
