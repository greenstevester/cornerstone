import { customElement, html } from "lit-element";
import { Router } from "../cornerstone/shared/Router";
import { SuperStructure } from "../cornerstone/shared/SuperStructure";
import { DynamicComponents } from "./components";
import { about } from "./facades/facade-about";
import { home } from "./facades/facade-home";
import { stack } from "./facades/facade-stack";
import { story } from "./facades/facade-story";

@customElement('stn-app')
export class App extends SuperStructure {

  constructor() {
    super();

    DynamicComponents.await.action();
    DynamicComponents.await.menu();

    this.initRouter((r) => {
      DynamicComponents.await.card();
      return this.appTemplate = html`${App.menu(r)} <div class="container">${home} ${App.footer()}</div>`;
    });

    this.addRoute('about', (r) => { this.appTemplate = html`${App.menu(r)} <div class="container">${about}  ${App.footer()}</div>`;});
    this.addRoute('stack', (r) => { this.appTemplate = html`${App.menu(r)}<div class="container"> ${stack}  ${App.footer()}</div>`;});
    this.addRoute('story', (r) => { this.appTemplate = html`${App.menu(r)} <div class="container">${story}  ${App.footer()}</div>`;});
  }

  static menu(router: Router) {
    return html`<stn-menu .router=${router}></stn-menu>`;
  }

  static footer() {
    return html`
      <div class="row" id="footer">
           <h5><img src="images/Cc.logo.circle.svg" class="attribution" alt="creative commons">
              building by Antonis Makriyannis from the Noun Project
          </h5>
      </div>  
    `
  }
}

