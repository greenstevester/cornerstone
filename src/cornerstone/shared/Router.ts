import { LitElement } from "lit-element";

export const proxy = new (class DomDelegate {
  window: any;
  document: any;

  constructor() {
    try {
      this.window = window;
    } catch (e) {
      this.window = {location: {hash: ''}, onhashchange: (event: HashChangeEvent) => {}}
    }
    try {
      this.document = document;
    } catch (e) {
      this.document = {title: ''}
    }
  }
})();

export interface RouteAction {
  (router: Router, parent?: LitElement | null): void
};

export class Router {
  private routes: Map<string, RouteAction> = new Map();
  private lastHash: string | null = null;
  private readonly parent: LitElement | null;

  constructor(private baseFn: RouteAction = () => {}, parent: LitElement | null = null) {
    this.parent = parent;
    proxy.window.onhashchange = (event: HashChangeEvent) => {
      let url = event.newURL;
      let tokens = url.split('#');
      let hash = tokens[1];
      this.goto(hash)
    };

  }

  static getUrlHash() {
    let hash = proxy.window.location.hash;
    if (hash) {
      return hash.replace(/#/g, '')
    } else {
      return ''
    }
  }

  add(hash: string, action: RouteAction): Router {
    this.routes.set(hash, action);
    return this;
  }

  goto(hash: string | null) {
    if (hash === null) hash = '';

    if (hash.indexOf('#') > -1) {
      hash = hash.replace(/#/g, '');
    }
    if (hash !== this.lastHash) {
      let window = proxy.window;
      let document = proxy.document;
      if (hash) {
        window.location.hash = hash;
        document.title = `${document.title.split(' - ')[0]} - ${hash}`;
        if (hash.indexOf('/') > 0) {
          let subroutes = hash.split('/');
          let routeFragment = '';
          subroutes.map(sr => {
            routeFragment = routeFragment ? `${routeFragment}/${sr}` : sr;
            this.dispatch(routeFragment, this.parent);
          })
        } else {
          this.dispatch(hash, this.parent);
        }
      } else {
        window.location.hash = '';
        document.title = `${document.title.split(' - ')[0]}`;
        this.baseFn(this, this.parent);
      }
      this.lastHash = hash;
    }
  }

  private dispatch(hash: string, parent: LitElement | null) {
    let fn = this.routes.get(hash);
    if (fn) fn(this, parent);
  }

  public static currentRoute() {
    return Router.getUrlHash();
  }
}


