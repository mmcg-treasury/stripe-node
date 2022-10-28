import * as StripeResource from '../StripeResource.js';
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
export default StripeResource.extend({
  path: 'charges',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{charge}',
  }),
  update: stripeMethod({
    method: 'POST',
    path: '/{charge}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  capture: stripeMethod({
    method: 'POST',
    path: '/{charge}/capture',
  }),
  search: stripeMethod({
    method: 'GET',
    path: '/search',
    methodType: 'search',
  }),
});
