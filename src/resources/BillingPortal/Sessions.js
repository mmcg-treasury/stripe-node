import * as StripeResource from '../../StripeResource.js';
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
export default StripeResource.extend({
  path: 'billing_portal/sessions',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
});
