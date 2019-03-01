import { LitElement } from "lit-element";


/**
 * Action Interface
 */
export interface RouteAction {
  (router: Router, parent?: LitElement | null): void
}

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
    window.onhashchange = (event: HashChangeEvent) => {
      let url = event.newURL;
      let tokens = url.split('#');
      let hash = tokens[1];
      this.goto(hash)
    };

  }

  /**
   * Get the current urls hash (exluding the '#'). Return '' if current url contains a '#' with nothing after or no '#' at all
   */
  static currentHash() {
    return this.browserHashToHash(window.location.hash);
  }

  public static currentRoute() {
    return this.toRoute(Router.currentHash());
  }

  private static browserHashToHash(hash: string) {
    if (hash) {
      return hash.replace(/#/g, '')
    } else {
      return ''
    }
  }

  private static toRoute(hash: string) {
    return hash.replace(/#/g, '').replace(/_/g, ' ');
  }

  private static toHash(route: string) {
    return route.replace(/ /g, '_');
  }

  /**
   * Add a route
   * @param {string} route corresponding to route. Supports sub-paths.
   * @param {RouteAction} action function called when route called
   */
  add(route: string, action: RouteAction): Router {
    this.routes.set(route, action);
    return this;
  }

  /**
   * Go to a routeOrHash
   * @param {string} routeOrHash routeOrHash to go to. `#` will be stripped if provided.
   */
  goto(routeOrHash: string | null) {
    if (routeOrHash === null) routeOrHash = '';

    let hash = Router.toHash(routeOrHash);
    let route = Router.toRoute(routeOrHash);

    if (hash !== this.lastHash) {

      if (route) {
        window.location.hash = hash;
        document.title = `${document.title.split(' - ')[0]} - ${route}`;
        if (route.indexOf('/') > 0) {
          let subroutes = route.split('/');
          let routeFragment = '';
          subroutes.map(sr => {
            routeFragment = routeFragment ? `${routeFragment}/${sr}` : sr;
            this.dispatch(routeFragment, this.parent);
          })
        } else {
          this.dispatch(route, this.parent);
        }
      } else {
        window.location.hash = '';
        document.title = `${document.title.split(' - ')[0]}`;
        this.baseFn(this, this.parent);
      }
      this.lastHash = hash;
    }
  }

  private dispatch(route: string, parent: LitElement | null) {
    let fn = this.routes.get(route);
    if (fn) fn(this, parent);
  }
}


