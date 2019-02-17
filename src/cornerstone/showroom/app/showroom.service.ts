import { html, TemplateResult } from "lit-html";
import { Router } from "../../shared/Router";
import { ShowroomExample } from "../components/stn-shrm-example";
import { FeatureProperty, Features } from "./showroom";

export class ShowroomService {
  private features: Features;
  private chosen: string | null = 'stn-card';
  private callback?: (name: string) => void;
  private router: Router;

  constructor(features: Features) {
    this.features = features;
    this.router = new Router(window.location.href, () => {
      this.chosen = '';
      if (this.callback) this.callback(name)
    });
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

  getExampleTemplate(name: string, element: ShowroomExample, service:ShowroomService): TemplateResult {
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
  
  getProperty(name: string): FeatureProperty {
    return this.features.getProperties(name)
  }
  
  addRoute(hash: string, action: () => void) {
    this.router.add(hash, action);
  }
  
  routeTo(route: string) {
    this.router.goto(route)
  }
  
  routeToHash() {
    this.router.goto(Router.currentRoute());
  }
}
