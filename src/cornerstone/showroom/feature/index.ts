import { TemplateResult } from "lit-element";
import { ShowroomExample } from "../components/stn-shrm-example";
import { FeatureService } from "./feature.service";

export interface FeatureTemplate {
  (element: ShowroomExample, srv: FeatureService): TemplateResult
}

export interface FeatureProperties {
  (element: ShowroomExample, srv: FeatureService): Map<string, any>
}
