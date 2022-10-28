'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const StripeResource = require('../StripeResource.js');
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
exports.default = StripeResource.extend({
  path: 'refunds',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{refund}',
  }),
  update: stripeMethod({
    method: 'POST',
    path: '/{refund}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  cancel: stripeMethod({
    method: 'POST',
    path: '/{refund}/cancel',
  }),
});
