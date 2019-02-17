import { html, LitElement, property, TemplateResult } from "lit-element";
import { Router } from "./Router";

/**
 * High level component that provides a container for the app:
 *  - a high level template
 *  - simple routing
 *  - bootstrapping
 */
export class Building extends LitElement {
  
  @property({type: Object, attribute: false})
  protected appTemplate: TemplateResult = html``;
  
  protected router?: Router;
  
  /**
   * No Shadow Root
   */
  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }
  
  protected initRouter(action: (router: Router) => TemplateResult) {
    this.router = new Router('main', action)
  }
  
  protected addRoute(name: string, action: (router: Router) => TemplateResult) {
    if (this.router) {
      this.router.add(name, action)
    } else {
      throw Error('router must be initialised with a home first')
    }
  }
  
  protected gotoInitialRoute() {
    if (this.router) { this.router.goto(this.router.currentRoute())}
  }
  
  render() {
    return this.appTemplate
  }
}
