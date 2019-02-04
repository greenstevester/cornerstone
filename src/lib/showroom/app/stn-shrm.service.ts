import { html, TemplateResult } from "lit-html";
import { ShowroomExample } from "../components/stn-shrm-example";
import { Features } from "./showroom";

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

  getExampleTemplate(name: string, element: ShowroomExample): TemplateResult {
    if (name) {
      return this.features.get(name)(element)
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

  getProperties(name: string) {
    return this.features.getProperties(name)
  }
}
