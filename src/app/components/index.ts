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

let hello = async function () {
  await import(/* webpackChunkName: "examples" */ './examples').then((scope) => {
    scope.moduleEntryPoints
  });
};

export const DynamicComponents = {
  await: {
    all: function () {
      card();
      menu();
      action();
      markdown();
      hello();
    },
    card: card,
    menu: menu,
    action: action,
    markdown: markdown,
    hello: hello
  }
};
