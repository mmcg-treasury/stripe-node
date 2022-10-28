import * as StripeResource from '../StripeResource.js';
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
export default StripeResource.extend({
  path: 'prices',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{price}',
  }),
  update: stripeMethod({
    method: 'POST',
    path: '/{price}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  search: stripeMethod({
    method: 'GET',
    path: '/search',
    methodType: 'search',
  }),
});
