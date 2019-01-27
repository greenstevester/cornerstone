import { customElement, property } from "@polymer/lit-element";
import { Stone } from "../src/lib/stone";
import { DemoService } from "./demo.service";

export class Menu extends Stone {

  @property({attribute: false})
  service!: DemoService;

  connectedCallback() {
    this.service!.foo();
  }

}
