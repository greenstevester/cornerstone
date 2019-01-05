# Modern Seed

A webapack-based seed project that's a modern JS/TS foundation for web applications

## Principles

* Keep things agnostic
  * Use modern JS (modules, features, async/await, etc)
  * Bound to no SPA framework
* promote good coding practices
  * tslint
  * separate unit from e2e testing
* Support complex projects
  * use webpack
  * use typescript
  * use postcss
* Keep things lean and fast
  * webpack/ts config supports dynamic module loading
  * use closure compiler
* Keep things robust
  * Be a WPA
  * use workbox
  * still needs some work

## usage
* add `./node_modules/.bin` to your path so you can avoid installing anything globally... because we all know it's evil!

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
* clean-up webpack config
* add a few scripts for dev work-flow
