import * as StripeResource from '../StripeResource.js';
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
export default StripeResource.extend({
  path: 'payouts',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{payout}',
  }),
  update: stripeMethod({
    method: 'POST',
    path: '/{payout}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  cancel: stripeMethod({
    method: 'POST',
    path: '/{payout}/cancel',
  }),
  reverse: stripeMethod({
    method: 'POST',
    path: '/{payout}/reverse',
  }),
});
