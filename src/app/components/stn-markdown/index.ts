import * as hljs from "highlight.js";
import { customElement, html, property } from "lit-element";
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import marked from "marked";
import { Stone } from "../../../cornerstone/shared/Stone";


@customElement('stn-markdown')
export class Markdown extends Stone {

  @property({attribute: false})
  private readonly markdown?: string;

  constructor() {
    super();
    marked.setOptions(StoryConfig.create());
    this.markdown = marked(`
# Title

bla bla bla

foo faa foo
    `)
  }

  render() {

    return html`<section class="story">${unsafeHTML(this.markdown)}</section>`;
  }

}

export const define = function () {
  let markdown = Markdown;
};

class StoryConfig {

  static baseMarkedConfig = {
    headerPrefix: 'mkdn',
    highlight(code: any) {
      return hljs.highlightAuto(code).value
    },
    silent: true
  };

  static create() {
    return Object.assign({}, StoryConfig.baseMarkedConfig);
  }

  static debug() {
    return Object.assign(StoryConfig.create(), {silent: false});
  }
}
