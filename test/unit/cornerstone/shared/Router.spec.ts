import { proxy, Router } from "../../../../src/cornerstone/shared/Router";

describe('Router', () => {
  it('goes to main route on \'\'', done => {
    const router = new Router((r) => {
      expect(Router.currentRoute()).toBe('');
      expect(r).not.toBeNull();
      done();
    });

    router.goto('')
  });

  it('goes to main route on \'#\'', done => {
    const router = new Router((r) => {
      expect(r).not.toBeNull();
      done();
    });

    router.goto('#')
  });

  it('goes to main route on null', done => {
    const router = new Router((r) => {
      expect(r).not.toBeNull();
      done();
    });

    router.goto(null)
  });

  it('should call routes when hash changes', done => {
    const router = new Router();

    router.add('a', () => {
      expect(Router.currentRoute()).toBe('a');
      done();
    });
    router.add('b', () => {
      expect(Router.currentRoute()).toBe('b');
      done();
    });

    router.goto('a');
    router.goto('#b');

  });

  it('should handle sub-routes', done => {
    const router = new Router();
    let aCalledFirst = false;
    let a1CalledSecond = false;
    router.add('a', () => {
      expect(Router.currentRoute()).toBe('a/1/x');
      expect(a1CalledSecond).toBeFalsy();
      aCalledFirst = true;
    });
    router.add('a/1', () => {
      expect(Router.currentRoute()).toBe('a/1/x');
      expect(aCalledFirst).toBeTruthy();
      a1CalledSecond = true;
    });
    router.add('a/1/x', () => {
      expect(a1CalledSecond).toBeTruthy();
      expect(Router.currentRoute()).toBe('a/1/x');
      done()
    });

    router.goto('a/1/x')
  })

  it('should trigger route on hash changed', done => {
    const router = new Router();

    router.add('a', () => {
      expect(Router.currentRoute()).toBe('a');
      done();
    });

    proxy.window.onhashchange(new HashChangeEvent('event', new class implements HashChangeEventInit {
      bubbles: boolean = true;
      cancelable: boolean = true;
      composed: boolean = true;
      newURL: string = 'http://someplace/#a';
      oldURL: string = 'http://someplace/';
    }))
  })

});

