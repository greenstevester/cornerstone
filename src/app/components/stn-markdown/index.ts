import { customElement, html, property } from "lit-element";
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import showdown from "showdown";
import { Stone } from "../../../cornerstone/shared/Stone";


@customElement('stn-markdown')
export class Markdown extends Stone {

  @property({attribute: false})
  private readonly markdown?: string;
  private converter: showdown.Converter;

  constructor() {
    super();
    this.converter = new showdown.Converter();
    this.markdown = this.converter.makeHtml(`
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

