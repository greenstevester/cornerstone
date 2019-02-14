import { customElement, html } from "lit-element";
import { Building } from "../cornerstone/shared/Building";
import { DynamicComponents } from "./components";
import { menu } from "./views/menu";
import { about } from "./views/view-about";
import { home } from "./views/view-home";
import { stack } from "./views/view-stack";
import { story } from "./views/view-story";

@customElement('stn-app')
export class ViewApp extends Building {
  
  constructor() {
    super();
    DynamicComponents.await.card();
    
    this.initRouter((r) => this.appTemplate = html`${menu(r)} ${home} `);
    this.addRoute('about', (r) => this.appTemplate = html`${menu(r)} ${about} `);
    this.addRoute('stack', (r) => this.appTemplate = html`${menu(r)} ${stack} `);
    this.addRoute('story', (r) => this.appTemplate = html`${menu(r)} ${story} `);
   
  }
  
  
}

