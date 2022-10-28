import * as StripeResource from '../../StripeResource.js';
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
export default StripeResource.extend({
  path: 'issuing/transactions',
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{transaction}',
  }),
  update: stripeMethod({
    method: 'POST',
    path: '/{transaction}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
});
