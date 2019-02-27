import { TemplateResult } from "lit-element";
import { WorkshopExample } from "../components/ws-example";
import { FeatureService } from "./feature.service";

export interface FeatureTemplate {
  (element: WorkshopExample, srv: FeatureService): TemplateResult
}

export interface FeatureProperties {
  (element: WorkshopExample, srv: FeatureService): Map<string, any>
}
