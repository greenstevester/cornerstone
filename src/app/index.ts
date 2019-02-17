import { customElement, html } from "lit-element";
import { Building } from "../cornerstone/shared/Building";
import { Router } from "../cornerstone/shared/Router";
import { DynamicComponents } from "./components";
import { about } from "./views/view-about";
import { home } from "./views/view-home";
import { stack } from "./views/view-stack";
import { story } from "./views/view-story";

@customElement('stn-app')
export class ViewApp extends Building {
  
  constructor() {
    super();
  
    DynamicComponents.await.action();
    DynamicComponents.await.menu();
  
    this.initRouter((r) => {
      DynamicComponents.await.card();
      return this.appTemplate = html`${ViewApp.menu(r)} ${home} `;
    });
    this.addRoute('about', (r) => this.appTemplate = html`${ViewApp.menu(r)} ${about} `);
    this.addRoute('stack', (r) => this.appTemplate = html`${ViewApp.menu(r)} ${stack} `);
    this.addRoute('story', (r) => this.appTemplate = html`${ViewApp.menu(r)} ${story} `);
  }
  
  static menu(router: Router) {
    return html`<stn-menu .router=${router}></stn-menu>`;
  }
  
}

