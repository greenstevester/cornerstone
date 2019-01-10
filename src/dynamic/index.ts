export const DynamicModuleRegistry = {
  feature: async function () {
    await import(/* webpackChunkName: "feature" */'./feature').then((scope) => {
      scope.FeatureElement.define()
    });
  }
};
