export class Router {
  private routes: Map<string, Function> = new Map();
  private lastHash: string | null = null;
 
  constructor(private base: string, private baseFn:Function) {
    window.location.hash = '';
    window.onhashchange = (event) => {
      let url = event.newURL;
      let tokens = url.split('#');
      let hash = tokens[1];
      this.goto(hash)
    }
  }
  
  add(hash: string, action: Function) {
    this.routes.set(hash, action)
  }
  
  goto(hash: string) {
    if (hash !== this.lastHash) {
      if (hash) {
        window.location.hash = hash;
        document.title = `${document.title.split(' - ')[0]} - ${hash}`;
        let fn = this.routes.get(hash);
        if (fn) fn();
      } else {
        window.location.hash = '';
        document.title = `${document.title.split(' - ')[0]}`;
        this.baseFn();
      }
      this.lastHash = hash;
    }
  }
}
