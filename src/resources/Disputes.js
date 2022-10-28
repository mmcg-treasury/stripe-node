import * as StripeResource from '../StripeResource.js';
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
export default StripeResource.extend({
  path: 'disputes',
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{dispute}',
  }),
  update: stripeMethod({
    method: 'POST',
    path: '/{dispute}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  close: stripeMethod({
    method: 'POST',
    path: '/{dispute}/close',
  }),
});
