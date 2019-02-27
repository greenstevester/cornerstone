import { LitElement } from "lit-element";

/**
 * Proxy implementation of Dom to make testing possible
 */
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

/**
 * Action Interface
 */
export interface RouteAction {
  (router: Router, parent?: LitElement | null): void
};

/**
 * Simple Router that provides a basic mapping of a route(string) to an action(function)
 *
 * <p>It supports sub-routes defined as <code>'a/b/c'</code> where the <code>/</code> is the sub-path delimiter. For example if you provide
 * a route for <code>'a'</code> and <code>'a/b'</code> and then the route <code>'#a/b'</code> is requested either through
 * {@link Router.goto('a/b')} or with {@link https://myhost/apath#a/b} then actions registered for <code>'a'</code> and for
 * <code>'a/b'</code> will be called in that order.
 *
 * <p>If a non-existent route is called nothing happens.
 */
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

  /**
   * Get the current urls hash (exluding the '#')
   */
  static getUrlHash() {
    let hash = proxy.window.location.hash;
    if (hash) {
      return hash.replace(/#/g, '')
    } else {
      return ''
    }
  }

  public static currentBrowserRoute() {
    return Router.getUrlHash();
  }

  /**
   * Add a route
   * @param {string} name corresponding to hash. Supports sub-paths.
   * @param {RouteAction} action function called when route called
   */
  add(hash: string, action: RouteAction): Router {
    this.routes.set(hash, action);
    return this;
  }

  private dispatch(hash: string, parent: LitElement | null) {
    let fn = this.routes.get(hash);
    if (fn) fn(this, parent);
  }

  /**
   * Go to a route
   * @param {string} hash route to go to. `#` will be stripped if provided.
   */
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
}


