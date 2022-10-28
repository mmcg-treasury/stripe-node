import * as StripeResource from '../StripeResource.js';
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
export default StripeResource.extend({
  path: 'reviews',
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{review}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  approve: stripeMethod({
    method: 'POST',
    path: '/{review}/approve',
  }),
});
