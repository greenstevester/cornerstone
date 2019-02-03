# Cornerstone

![logo][src/images/noun_building_1801.svg]

A webapack-based seed project that's a good foundation for modern JS/TS web applications. An attempt to make web development productivd without the lock-in of Big Frameworks!

If you are wondering 'Why one more seed project'? -> [Why?](#why)

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


## <a name="why">Why another seed project?</a>
I have been using and following the big frameworks out there years now. I realised recently that the race between React, Angular, and Vue are a race to the bottom. They all fail like so many frameworks and framework-ish libraries in other tefchnology and languages before.

* They isolate the developers in competing factions
* They often become the solution to the problem they created in the first place.
* They encourage expertise in the framework/library at the expense of understanding the under-lying technology... which in this case is JS and the web standard adoption

I recently stepped out of a 4-year bubble working almost exclusively with AngularJS and Angular. From inside my bubble the only thing out there was React and recently Vue. But once outside I realised that...
* There was a variety of alternatives out there.
* Web standard adoption inside of browsers had progressed massively
* Much of the problems I was trying to solve were gone without the framework

I also recently realised how similar this all was to what I had experienced years ago with the J2EE/JEE frameworks and servers (JBoss, Websphere, Glassfish, Weblogic, etc.).

So after dealing with the reality distortion field that had dropped, I wanted to create a JS/TS seed project that provides me a clean starting place for any web project, or prototype, or demo. I wanted something that addressed issues that plagued the work me and myn team were fighting with all the time. I wanted something that provided a modern platform to develop, test, deliver, run efficiently.

Here are some anti-patterns I think I have identified:
1. __the cli golden cage__ - Although I like cli's and appreciate the benefit they bring I think it is a 'smell' when a framework or library requires one to make you productive. It has a tendency to create lock-in. You now have a specific way to build, to extend the cli, to define plug-ins and/or libs.
1. __uber special packager build__ - Ideally our projects should not be bound to any packaging process. While that seems almost impossible at the moment at least we should not be stuck with one framework's build prescription. If the framework corners you then we have to ask why that is!
1. __fight the builder__ - Most default build systems and seed projects do not build production-ready code. So we spend too long building in dev mode. So when we find after months of dev-mode work that code is too fat or loads too slowly we start having to rethink the whole way we build. Or worst due to lack of time to fix issues we go to production with un-minified code because we just don't have time to fix the issues.
1. __I will write tests later__ - I will not defend TDD here... that's a whole other topic. But too often developers address the addition of tests too late... usually just before completing their work or even worse delay it until the maintenance becomes too costly.
1. __build-test-rebuild__ - It is too easy to end-up with a different way to build for development, testing, and release. It means that ultimately we do not deploy what we tested.

### So what should we do about this?
A few things became clear to me and I am trying to capture them in this seed project.
1. favor web standards and plain code _over_ cool frameworks
1. favor a build system that you maintain _over_ custom cli's that do magic
1. favor separating unit, integration, and end-to-end tests _over_ a do-it-all framework or setup
1. favor a setup that will allow you to quickly add resource chunking, dynamic loading, and other performance enhancements as soon as you need it without much work _over_ expedient default settings

### A note on premature optimisation
You could say that this seed project is solving problems before they occur. I am the first to be concerned about this. But the current state of Javascript has taught me otherwise. We are forced into complex and often complex build systems for modern web-apps. The amount of effort that refactoring a system to support dynamic loading, for example, can mean that the effort gets delayed until things get unbearable. I have experienced so many cases where doing this early would have been much better.

I think there is also a case to be made that good web-design requires that the web pages load as fast as possible. That means using features like chunking, dynamic loading, web workers from day one. Waiting until the negative feedback comes in is too late.

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
