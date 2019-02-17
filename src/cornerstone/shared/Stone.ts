import { css, CSSResult, LitElement } from 'lit-element';

let id = 0;

export const baseComponentCss: CSSResult = css`
    :host[hidden] {
        display: none;
    }

    :host {
        display: block;
    }`;

/**
 * Stone components are shaded components. Stone components are the basis for creating highly re-usable components that fully leverage
 * shadow DOM.
 *
 * It provides default features
 *  - unique ID
 *  - default CSS for shadow DOM components
 */
export abstract class Stone extends LitElement {
  private readonly Id: number;
  private readonly Class: string;
  
  protected constructor() {
    super();
    this.Id = id++;
    this.Class = this.constructor.name;
    if (this.Class === 'Stone') {
      throw new TypeError('Cannot construct Stone instances directly');
    }
  }
  
  hashcode() {
    return this.Class + ':' + this.Id;
  }
  
  static styles = [baseComponentCss];
  

}


