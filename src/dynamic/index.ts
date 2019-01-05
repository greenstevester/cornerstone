export class DynamicModule {

  constructor() {
    console.log("lazy module running")
  }

  getValue(): String {
      return 'This is dynamic stuff!'
  }
}

console.log('lazy module loaded');
