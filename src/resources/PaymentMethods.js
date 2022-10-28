import * as StripeResource from '../StripeResource.js';
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
export default StripeResource.extend({
  path: 'payment_methods',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{paymentMethod}',
  }),
  update: stripeMethod({
    method: 'POST',
    path: '/{paymentMethod}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  attach: stripeMethod({
    method: 'POST',
    path: '/{paymentMethod}/attach',
  }),
  detach: stripeMethod({
    method: 'POST',
    path: '/{paymentMethod}/detach',
  }),
});
