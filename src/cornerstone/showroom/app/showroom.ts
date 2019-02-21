import { html } from "lit-element";
import { render, TemplateResult } from "lit-html";
import { ShowroomExample } from "../components/stn-shrm-example";
import { Menu } from "../components/stn-shrm-menu";
import { Showroom } from "../components/stn-shrm-showroom";
import { ShowroomService } from "./showroom.service";

export function startDemo(features: Features) {

  //init demo service
  Menu;
  Showroom;
  ShowroomExample;

  // @ts-ignore
  const service = new ShowroomService(features, null);

  //init app template

  const showroomApp = (service: ShowroomService) => {
    return html`<stn-showroom .service=${service} ></stn-showroom>`;
  };

  //start app
  render(showroomApp(service), document.body);
}

export type FeatureTemplate = (element: ShowroomExample, service: ShowroomService) => TemplateResult;

export type FeatureProperty = (element: ShowroomExample, service: ShowroomService) => Map<string, any>;

const emptyTemplateFn = function():TemplateResult  {return html``};
const emptyPropFn = function(): Map<string, any> {return new Map<string, any>()};

export class Features {

  private features: Map<string, FeatureTemplate> = new Map();
  private properties: Map<string, FeatureProperty> = new Map();
  private welcome: string = '';
  private welcomeContent: () => void = () => {
  };

  constructor(private title: string) {
    document.title = title;
  }

  add(name: string,
      example?: FeatureTemplate,
      properties?: FeatureProperty) {

    example = example || emptyTemplateFn;
    properties = properties || emptyPropFn;

    this.features.set(name, example);
    if (properties) this.properties.set(name, properties);
    return this;
  }

  getTitle() {
    return this.title;
  }

  getAll(): IterableIterator<string> {
    return this.features.keys()
  }

  get(name: string): FeatureTemplate {
    let fn = this.features.get(name);
    if (fn != null) {
      return fn;
    } else {
      throw Error(`no function found for: ${name}`)
    }
  }

  setIntro(welcomeMessage: string, content: () => void) {
    this.welcome = welcomeMessage;
    this.welcomeContent = content;

  }

  getWelcome() {
    return this.welcome;
  }

  getWelcomeContent() {
    return this.welcomeContent()
  }

  getProperties(name: string): FeatureProperty {
    let map = this.properties.get(name);
    if (map) {
      return map;
    } else {
      return () => new Map()
    }
  }
}
