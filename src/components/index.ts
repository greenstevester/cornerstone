export const DynamicComponents = {
  await: {
    card: async function () {
      await import(/* webpackChunkName: "stn-card" */'./stn-card').then((scope) => {
        scope.define()
      });
    }
  }
};
