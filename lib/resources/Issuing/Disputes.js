import * as StripeResource from '../../StripeResource.js';
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
export default StripeResource.extend({
  path: 'issuing/disputes',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
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
  submit: stripeMethod({
    method: 'POST',
    path: '/{dispute}/submit',
  }),
});
