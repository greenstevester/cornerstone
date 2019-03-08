# Cornerstone

A webpack-based seed project that's a good starting place for modern JS/TS web applications. An attempt to make web development productive without the lock-in of Big Frameworks and multiple cli's!

If you are wondering 'Why one more seed project'? -> [Why?](documentation/WHY.md)

## Guides
* [Creating a workshop](documentation/WORKSHOP.md)

## Foundation Features

* Typescript - The tsconfig.json includes support for decorators, dynamic loading, and ESNext
* webpack
  * Dynamic modules - Make chunking and dynamic loading part of your design
  * chunking
  * Maps - Maps work with minified production code so that we can develop all the time with code we will use in prod

## Removable Features
Most of the features in this seed project are optional. You should also be able to easily add dependencies that are compatible with ES6 and TypeScript.

* lit-html and lit-element - Polymer core libraries to build true web components
    * Workshop setup depends on these two libraries
* Some custom code
  * to extend lit-element
  * to provide a simple router
* Workshop Environment - Isolate features for the sake of documenting, testing, and showcasing. Includes an easy to bootstrap mechanism
* Jest - for unit testing
* TestCafe - for integration and end-to-end testing
* Milligram - a tiny css library (<2k) that you can enhance or replace when/if you find you need something more.
* Simple theming file to share css across components
* Non-trivial example code showing all of the key features


That said I think this is a good stack that should allow to build simple or complex SPAs without any of the complexity and overhead of the big frameworks.

## Usage
### Setup
* add `./node_modules/.bin` to your path so you can avoid installing anything globally... because we all know it's evil! Do it just in the shell or add it to your ~/.bashrc

    ```
    export PATH=./node_modules/.bin:$PATH
    ```
* ideally use yarn to install the dependencies
    ```
    yarn
    ```

### build and test
* _unit tests_ - run tests that is isolatable and ideally not needing the DOM.
    ```
    yarn test
    ```
* _integration tests_ - You will need to run either the app or the workshop(see below). Then run the testcafe integration tests. These should be split into web-layer integration and end-to-end tests with a full back-end.
    ```
    # not yet implemented
    ```
* _lint_ - make sure your code is clean and following some reasonable standard.
    ```
    yarn lint
    ```
* _building and watching_ - There are variations here for different purposes... mostly obvious
    build the app and the workshop
    ```
    yarn build
    ```
    generates `dist/app` and `dist/workshop`

    build and watch the app:
    ```
    yarn serve.app
    ```
    build and watch the workshop:
    ```
    yarn serve.workshop
    ```

<!--TODO: this section is no longer true... although the underlying problem remains -->
    You then need to run `http-serve dist/workshop` or `http-serve dist/app` to serve any of the builds.

    Why not use the webpack server? Because we should test releasable code and avoid the build-test-rebuild anti-pattern

    Note: the plan is to eventually share a single build of common code between app and workshop.

## Reference
* https://www.typescriptlang.org/ - TypeScript
* https://lit-html.polymer-project.org/ - lit-html
* https://lit-element.polymer-project.org/ - lit-element
* https://webpack.js.org - check `package.json` for names of all plugins and loaders used
* https://www.favicon-generator.org/ to generate the favicon set
* OG meta-tags http://ogp.me/
* https://developers.google.com/web/tools/workbox/ - WPA support
* http://publicicons.org/


## Todo

- [x] ~~find a decent routing library: complete, no overkill, reasonable size, ES6~~ I am providing a simple solution
- [ ] find a decent XHR library... if it's really needed.
- [ ] Make sure I can add angular, react, vue, polymer, web components without having to change the core
- [ ] finish WPA support (pulled out for now)
- [x] add unit and e2e testing support
- [x] clean-up sample code (apply tslint fixes)
 [ ] Build SPA or component lib or hybrid with a single webpack setup
- [ ] Build workshop and app with a single webpack setup
- [ ] Find some way to share services... thinking that there should be some event-based approach
- [ ] replace 3-based routing with full use of history api https://computerrock.com/blog/html5-changing-the-browser-url-without-refreshing-page/
