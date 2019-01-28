import { Features } from "./stn-shrm";
import { TemplateResult } from "lit-html";

export class DemoService {
  private features: Features;

  constructor(features: Features) {
    this.features = features;

  }


  getFeatureNames() {
    return this.features.getAll()
  }

  getExampleTemplate(): TemplateResult {
    return this.features.get('stn-card')()
  }
}
