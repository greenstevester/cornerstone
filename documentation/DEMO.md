# Feature Demo's

## Usage

### Add a feature

`demo/index.ts` is where setting up the demo. You should add all the features to an instance of `Features`:
```javascript
  import { Features, startDemo } from "./app/showroom";

  //initialize your feaures

  let features = new Features("Your Project Demo")

  // add featues

  startDemo(features);
```

Add a welcome view:
```javascript
  // add some welcome page details or instructions
  features.setIntro(
    'Welcome to the Demo',
    (): TemplateResult => { return html`<!-- Your welcome message -->`}
  );
```

In the simplest case you provide just a lit-html template
```javascript
  features.add('feature one', ()=> html`<!-- your template -->`)
```

Sometimes there is more to render the template. You can treat this just like the lit-element `render()` method you would implement in a custom component.
```javascript
    features.add( 'feature two',
      (): TemplateResult => {
        // do some initialization that will be call at every re-render
        return html`<!-- your template -->`
        })
```

When things get even more complex you will need to bind properties to the rendering cycle. Both the template and properties function can provide the showcase example element as an argument.
```javascript
    features.add( 'feature two',
      (element): TemplateResult => {
        return html`Hello ${element.get('myPropo')}!`
      },
      (element):Map<string, any> => {
         const props = new Map<string, any>()
         return props.set('myProp','Demo')
      }
      )
```



Complex feature demos can be factored out into a separate module. You can share states between the template and the properties there.
```javascript
    features
      .add( 'feature three', template3, properties3)
      .add( 'feature four', template4, properties4)
```
