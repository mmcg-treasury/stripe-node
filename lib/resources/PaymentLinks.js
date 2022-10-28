'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const StripeResource = require('../StripeResource.js');
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
exports.default = StripeResource.extend({
  path: 'payment_links',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{paymentLink}',
  }),
  update: stripeMethod({
    method: 'POST',
    path: '/{paymentLink}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  listLineItems: stripeMethod({
    method: 'GET',
    path: '/{paymentLink}/line_items',
    methodType: 'list',
  }),
});
