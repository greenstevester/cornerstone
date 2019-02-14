let card = async function () {
  await import(/* webpackChunkName: "stn-card" */'./stn-card').then((scope) => {
    scope.define()
  });
};

let menu = async function () {
  await import(/* webpackChunkName: "stn-menu" */'./stn-menu').then((scope) => {
    scope.define()
  });
};

export const DynamicComponents = {
  await: {
    all: function () {
      card();
      menu();
    },
    card: card,
    menu: menu
  }
};
