import { html } from "lit-element";
import { render, TemplateResult } from "lit-html";
import { ShowroomExample } from "../components/stn-shrm-example";
import { Menu } from "../components/stn-shrm-menu";
import { Showroom } from "../components/stn-shrm-showroom";
import { FeatureProperties, FeatureTemplate } from "../feature";
import { FeatureService } from "../feature/feature.service";

export function startDemo(features: Features) {

  //init demo service
  Menu;
  Showroom;
  ShowroomExample;

  // @ts-ignore
  const service = new FeatureService(features, null);

  //init feature template

  const showroomApp = (service: FeatureService) => {
    return html`<stn-showroom  .service=${service} ></stn-showroom>`;
  };

  //start feature
  render(showroomApp(service), document.body);
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
