let card = async function () {
  await import(/* webpackChunkName: "stn-card" */'./stn-card').then((scope) => {
    scope.define()
  });
};

export const DynamicComponents = {
  await: {
    all: function () {
      card();
    },
    card: card
  }
};
