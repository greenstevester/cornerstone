import { ShadowSelector } from "./shadow-selector";

fixture`Getting Started`
  .page`http://localhost:9000`
  .beforeEach(async t => {
    await t.navigateTo('#stn-card');
  })
;

test('card feature should show three cards', async t => {
  await t.expect(await ShadowSelector(t, 'ws-workshop ws-example')
    .countComponents(['stn-card'])).eql(4)
});

test('card should show an h2 title', async t => {
  let actual = await ShadowSelector(t, 'ws-workshop ws-example')
    .findShadowedElementText(['stn-card'], 'h2');

  await t
    .expect(actual)
    .contains('The First')

});
