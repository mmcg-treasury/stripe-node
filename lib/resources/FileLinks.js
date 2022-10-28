import * as StripeResource from '../StripeResource.js';
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
export default StripeResource.extend({
  path: 'file_links',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{link}',
  }),
  update: stripeMethod({
    method: 'POST',
    path: '/{link}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
});
