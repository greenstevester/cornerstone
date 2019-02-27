import { customElement, html } from "lit-element";
import { Router } from "../cornerstone/shared/Router";
import { SuperStructure } from "../cornerstone/shared/SuperStructure";
import { DynamicComponents } from "./components";
import { about } from "./facades/facade-about";
import { home } from "./facades/facade-home";
import { stack } from "./facades/facade-stack";
import { story } from "./facades/facade-story";

@customElement('stn-app')
export class CornerstoneApp extends SuperStructure {

  constructor() {
    super();

    DynamicComponents.await.action();
    DynamicComponents.await.menu();

    this.initRouter((r) => {
      DynamicComponents.await.card();
      return this.appTemplate = html`${CornerstoneApp.menu(r)} ${home} `;
    });

    this.addRoute('about', (r) => { return this.appTemplate = html`${CornerstoneApp.menu(r)} ${about} `;});
    this.addRoute('stack', (r) => { return this.appTemplate = html`${CornerstoneApp.menu(r)} ${stack} `;});
    this.addRoute('story', (r) => { return this.appTemplate = html`${CornerstoneApp.menu(r)} ${story} `;});
  }

  static menu(router: Router) {
    return html`<stn-menu .router=${router}></stn-menu>`;
  }

}

