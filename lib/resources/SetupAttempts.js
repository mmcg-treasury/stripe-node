import * as StripeResource from '../StripeResource.js';
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
export default StripeResource.extend({
  path: 'setup_attempts',
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
});
