# Cornerstone

![logo][src/images/noun_building_1801.svg]

A webapack-based seed project that's a good foundation for modern JS/TS web applications. An attempt to make web development productivd without the lock-in of Big Frameworks!

If you are wondering 'Why one more seed project'? -> [Why?](documentation/WHY.md)

## Guides
* [Creating a demo](documentation/DEMO.md)

## Main Features

* Typescript - The tsconfig.json includes support for decorators, dynamic loading, and ESNext
* lit-html and lit-element - Polymer core libraries to build true web components
* a few optional base code
* Dynamic modules - Make chunking and dynamic loading part of your design
* Feature Demo Environemnt - Isolate features for the sake of documenting, testing, and showcasing. Includes an easy to bootstrap mechanism
* Jest - for unit testing
* TestCafe - for integration and end-to-end testing
* Milligram - a tiny css library (<2k) that you can enhance or replace when/if you find you need something more.
* Non-trivial example code showing all of the key features at work
* Maps - Maps work with minified production code so that we can develop all the time with code we will use in prod

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
* _integration tests_ - You will need to run either the site or the demo(see below). Then run the testcafe integration tests. These should be split into web-layer integration and end-to-end tests with a full back-end.
    ```
    # not yet implemented
    ```
* _lint_ - make sure your code is clean and following some reasonable standard.
    ```
    yarn lint
    ```
* _building and watching_ - There are variations here for different purposes... mostly obvious
    ```
    yarn build.dev
    ```
    ```
    yarn build.prod
    ```
    Run the demo site for component-level integration tests
    ```
    yarn build.demo
    ```
    You then need to run `http-serve dist` to serve the site.

    Why not use the webpack server? Because we should test releaseable code and avoid the build-test-rebuild anti-pattern

## Reference
* https://webpack.js.org - check `package.json` for names of all plugins and loaders used
* https://www.favicon-generator.org/ to generate the favicon set
* OG meta-tags http://ogp.me/
* https://developers.google.com/web/tools/workbox/ - WPA support
* http://publicicons.org/


## Todo

* Make sure I can add angular, react, vue, polymer, web components without having to change the core
* finish WPA support
* add unit and e2e testing support
* clean-up sample code (apply tslint fixes)
