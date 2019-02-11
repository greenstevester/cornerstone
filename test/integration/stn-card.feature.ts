import { ShadowSelector, ShadowSlectorInit } from "./shadow-selector";

fixture`Getting Started`
  .page`http://localhost:8080`
  .beforeEach((t) => ShadowSlectorInit(t))
;

test('My first test', async t => {
  await t
    .navigateTo('#stn-card')
    .expect(ShadowSelector('stn-card').count)
    .eql(3)
});
