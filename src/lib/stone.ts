import { LitElement } from '@polymer/lit-element/lit-element.js';

let id = 0;

// if (!window['mkdn']) window['mkdn'] = {dev: false};

export abstract class Stone extends LitElement {
  private readonly Id: number;
  private readonly Class: string;
  static tagname: string='';

  constructor() {
    super();
    this.Id = id++;
    this.Class = this.constructor.name;
    if (this.Class === 'Stone') {
      throw new TypeError('Cannot construct Stone instances directly');
    }
  }


  hashcode() {
    // return this.Class + ':' + this.Id;
  }

  connectedCallback() {
    // console.debug(`connected: ${this.Class}`);
  }

  static define(name?: string) {
    try {
      const Class = this;
      if (name) {
        window.customElements.define(name, Class);
      } else if (this.tagname !== '') {
        window.customElements.define(this.tagname, Class);
      } else {
        throw Error('either define [static this.name] or provide a valid name to the define(name) function');
      }
    } catch (e) {
      console.debug(`swallowing custom component define() for [${name ? name : this.tagname}] error: ${e.message}`);
    }
  }

  createRenderRoot(): Element | ShadowRoot {
    // should use a 'closed' shadow dom but must be open for testing!!! Need to figure this out
    return this.attachShadow({mode: 'open'});
  }

}
