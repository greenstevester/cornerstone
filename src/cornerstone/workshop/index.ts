import { html } from "lit-element";
import { render, TemplateResult } from "lit-html";
import { WorkshopExample } from "./components/ws-example";
import { WorkshopMenu } from "./components/ws-menu";
import { Workshop } from "./components/ws-workshop";
import { FeatureProperties, FeatureTemplate } from "./feature";
import { FeatureService } from "./feature/feature.service";

export function startWorkshop(features: Features) {

  //init workshop components
  WorkshopMenu;
  Workshop;
  WorkshopExample;

  // @ts-ignore
  const service = new FeatureService(features, null);

  //init feature template

  const workshop = (service: FeatureService) => {
    return html`<ws-workshop  .service=${service} ></ws-workshop>`;
  };

  //start feature
  render(workshop(service), document.body);
}

const emptyTemplateFn = function():TemplateResult  {return html``};
const emptyPropFn = function(): Map<string, any> {return new Map<string, any>()};

export class Features {

  private features: Map<string, FeatureTemplate> = new Map();
  private properties: Map<string, FeatureProperties> = new Map();
  private welcome: string = '';
  private welcomeContent: () => void = () => {
  };

  constructor(private title: string) {
    document.title = title;
  }

  add(name: string,
      example?: FeatureTemplate,
      properties?: FeatureProperties) {

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

  getProperties(name: string): FeatureProperties {
    let map = this.properties.get(name);
    if (map) {
      return map;
    } else {
      return () => new Map()
    }
  }
}
