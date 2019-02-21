import { html, LitElement, property, TemplateResult } from "lit-element";
import { RouteAction, Router } from "./Router";

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

  constructor() {
    super();
    this.updateComplete.then(() => {
      this.gotoInitialRoute()
    });
  }

  /**
   * No Shadow Root
   */
  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }

  protected initRouter(action: RouteAction) {
    this.router = new Router(action, this)
  }

  protected addRoute(name: string, action: RouteAction) {
    if (this.router) {
      this.router.add(name, action)
    } else {
      throw Error('router must be initialised with a home first')
    }
  }

  protected gotoInitialRoute() {
    if (this.router) { this.router.goto(Router.currentRoute())}
  }

  render() {
    return this.appTemplate
  }
}
