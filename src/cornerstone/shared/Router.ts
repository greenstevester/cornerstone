export class Router {
  private routes: Map<string, Function> = new Map();
  private lastHash: string | null = null;
  
  constructor(private base: string, private baseFn:(router:Router)=>void) {
    window.onhashchange = (event) => {
      let url = event.newURL;
      let tokens = url.split('#');
      let hash = tokens[1];
      this.goto(hash)
    };
    if (Router.getUrlHash() === '') {
      this.goto('');
    }
  }
  
  static getUrlHash() {
    let hash = window.location.hash;
    if (hash) {
      return hash.replace(/#/g, '')
    } else {
      return ''
    }
  }
  
  add(hash: string, action: (router:Router)=>void): Router {
    this.routes.set(hash, action);
    if (Router.getUrlHash() === hash) {
      this.goto(hash);
    }
    return this;
  }
  
  goto(hash: string) {
    if (hash.indexOf('#') > -1) {
      hash = hash.replace(/#/g, '');
    }
    if (hash !== this.lastHash) {
      if (hash) {
        window.location.hash = hash;
        document.title = `${document.title.split(' - ')[0]} - ${hash}`;
        let fn = this.routes.get(hash);
        if (fn) fn(this);
      } else {
        window.location.hash = '';
        document.title = `${document.title.split(' - ')[0]}`;
        this.baseFn(this);
      }
      this.lastHash = hash;
    }
  }
  
  public currentRoute() {
    return Router.getUrlHash();
  }
}
