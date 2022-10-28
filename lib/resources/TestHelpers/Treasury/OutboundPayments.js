import * as StripeResource from '../../../StripeResource.js';
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
export default StripeResource.extend({
  path: 'test_helpers/treasury/outbound_payments',
  fail: stripeMethod({
    method: 'POST',
    path: '/{id}/fail',
  }),
  post: stripeMethod({
    method: 'POST',
    path: '/{id}/post',
  }),
  returnOutboundPayment: stripeMethod({
    method: 'POST',
    path: '/{id}/return',
  }),
});
