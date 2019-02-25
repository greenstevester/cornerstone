import { LitElement } from "lit-element";

/**
 * High-level component that can be used to define facades or other high-level containers. They do not isolate css and other scope.
 * Facade components are nmot meant to by highly re-usable outside the current application.
 */
export class Facade extends LitElement {


  /**
   * Facade components are share their styling with the DOM so the render root is not shaded.
   */
  protected createRenderRoot(): Element | ShadowRoot {
    return this;
  }
}
