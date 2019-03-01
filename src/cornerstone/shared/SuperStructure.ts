import { html, LitElement, property, TemplateResult } from "lit-element";
import { RouteAction, Router } from "./Router";

/**
 * High level component that provides a container for an application:
 *  - top level page template
 *  - application routing
 *
 * <p>Use {@link initRouter()} to initialize the router and add routes. You will have to pass the {@link router} as a property to any
 * component that needs to trigger a route change.
 *
 * <p>You do not have to use routing. Instead you can directly initialize the {@link appTemplate} with a <code>lit-html</code> template.
 *
 * <p>This component does not use a shadow root by default. It is likely thought that it is better to be able to leverage all of the html
 * initialization. You can override {@link createRenderRout()} to return <code>this.attachShadow({mode: 'open'});//or 'closed'</code>.
 *
 * see: {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow}
 *
 */
export class SuperStructure extends LitElement {

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
   * Render whole application
   */
  render() {
    return this.appTemplate
  }

  /**
   * No Shadow Root wanted
   */
  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }

  /**
   * Init router with default or home route
   * @param {RouteAction} action function called when route called.
   */
  protected initRouter(action: RouteAction) {
    this.router = new Router(action, this)
  }

  /**
   * Add a route
   * @see {@link Router.add()}
   */
  protected addRoute(name: string, action: RouteAction) {
    if (this.router) {
      this.router.add(name, action)
    } else {
      throw Error('router must be initialised with a home first')
    }
  }

  /**
   * Initialize routing based on browser's hash. If it is empty or <code>#</code> then the routing will go to the default route
   */
  protected gotoInitialRoute() {
    if (this.router) { this.router.goto(Router.currentRoute())}
  }
}
