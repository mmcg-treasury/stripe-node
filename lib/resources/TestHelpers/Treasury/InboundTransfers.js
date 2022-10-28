import * as StripeResource from '../../../StripeResource.js';
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
export default StripeResource.extend({
  path: 'test_helpers/treasury/inbound_transfers',
  fail: stripeMethod({
    method: 'POST',
    path: '/{id}/fail',
  }),
  returnInboundTransfer: stripeMethod({
    method: 'POST',
    path: '/{id}/return',
  }),
  succeed: stripeMethod({
    method: 'POST',
    path: '/{id}/succeed',
  }),
});
