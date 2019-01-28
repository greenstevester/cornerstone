import { property, html } from "@polymer/lit-element";
import { Stone } from "../../src/lib/stone";
import { DemoService } from "../app/demo.service";

export class ShowroomExample extends Stone {

  @property({attribute: false})
  service!: DemoService;

  render() {
    return this.service.getExampleTemplate()
  }
}
