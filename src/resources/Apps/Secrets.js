import * as StripeResource from '../../StripeResource.js';
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
export default StripeResource.extend({
  path: 'apps/secrets',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  deleteWhere: stripeMethod({
    method: 'POST',
    path: '/delete',
  }),
  find: stripeMethod({
    method: 'GET',
    path: '/find',
  }),
});
