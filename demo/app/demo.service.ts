import { Features } from "./stn-shrm";
import { html, TemplateResult } from "lit-html";

export class DemoService {
  private features: Features;
  private chosen = 'stn-card';
  private callback?: (name: string) => void;

  constructor(features: Features) {
    this.features = features;
  }

  getFeatureNames() {
    return this.features.getAll()
  }

  getExampleTemplate(name: string): TemplateResult {
    if (name) {
      return this.features.get(name)()
    }
    return html``
  }

  setSelected(name: string) {
    this.chosen = name;
    if(this.callback) this.callback(name)
  }

  registerSelectionWatcher(callback: (name:string) => void) {
    this.callback = callback;

  }
}
