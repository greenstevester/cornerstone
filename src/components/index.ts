export const DynamicComponents = {
  load: {
    feature: async function () {
      await import(/* webpackChunkName: "feature" */'./stn-feature').then((scope) => {
        scope.FeatureElement.define()
      });
    }
  }
};
