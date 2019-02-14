import { css } from "lit-element";

export const styles = css`
    :host[hidden] {
        display: none;
    }
    
    :host {
        display: block;
    }
    
    h2 {
        color: var(--color-complement-4);
    }
    
    div {
        border: var(--dark) solid 0.26rem;
        padding: 1rem;
        margin: .25rem;
    }
`;
