import { html, TemplateResult } from "lit-html";
import { Features } from "./stn-shrm";

export class StnShrmService {
  private features: Features;
  private chosen: string | null = 'stn-card';
  private callback?: (name: string | null) => void;

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

  setSelected(name: string | null) {
    this.chosen = name;
    if(this.callback) this.callback(name)
  }

  registerSelectionWatcher(callback: (name: string | null) => void) {
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
}
