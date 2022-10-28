import * as StripeResource from '../../StripeResource.js';
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
export default StripeResource.extend({
  path: 'checkout/sessions',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{session}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  expire: stripeMethod({
    method: 'POST',
    path: '/{session}/expire',
  }),
  listLineItems: stripeMethod({
    method: 'GET',
    path: '/{session}/line_items',
    methodType: 'list',
  }),
});
