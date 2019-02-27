import { LitElement } from "lit-element";
import { html, TemplateResult } from "lit-html";
import { FeatureProperties } from ".";
import { Features } from "..";
import { Router } from "../../shared/Router";
import { WorkshopExample } from "../components/ws-example";

export class FeatureService {
  private features: Features;
  private chosen: string | null = 'stn-card';
  private callback?: (name: string) => void;
  private router: Router;

  constructor(features: Features, parent: LitElement) {
    this.features = features;
    this.router = new Router(
      () => {
        this.chosen = '';
        if (this.callback) this.callback(name)
      },
      parent);
    for (const name of this.features.getAll()) {
      this.router.add(name, () => {
        this.chosen = name;
        if (this.callback) this.callback(name)
      })
    }

  }

  getFeatureNames() {
    return this.features.getAll()
  }

  getExampleTemplate(name: string, element: WorkshopExample, service: FeatureService): TemplateResult {
    if (name) {
      return this.features.get(name)(element,service)
    }
    return html``
  }

  setSelected(name: string) {
    this.router.goto(name);

  }

  registerSelectionWatcher(callback: (name: string ) => void) {
    this.callback = callback;

  }

  getTitle() {
    return this.features.getTitle()
  }

  getWelcome() {
    return this.features.getWelcome()
  }

  getWelcomeContent() {
    return this.features.getWelcomeContent()
  }

  getProperty(name: string): FeatureProperties {
    return this.features.getProperties(name)
  }

  addRoute(hash: string, action: () => void) {
    this.router.add(hash, action);
  }

  routeTo(route: string) {
    this.router.goto(route)
  }

  routeToHash() {
    this.router.goto(Router.currentBrowserRoute());
  }
}
