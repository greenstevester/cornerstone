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

let action = async function () {
  await import(/* webpackChunkName: "stn-action" */'./stn-action').then((scope) => {
    scope.define()
  });
};

let markdown = async function () {
  await import(/* webpackChunkName: "stn-markdown" */'./stn-markdown').then((scope) => {
    scope.define()
  });
};

export const DynamicComponents = {
  await: {
    all: function () {
      card();
      menu();
      action();
      markdown();
    },
    card: card,
    menu: menu,
    action: action,
    markdown: markdown
  }
};
