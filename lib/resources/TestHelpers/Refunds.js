import * as StripeResource from '../../StripeResource.js';
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
export default StripeResource.extend({
  path: 'test_helpers/refunds',
  expire: stripeMethod({
    method: 'POST',
    path: '/{refund}/expire',
  }),
});
