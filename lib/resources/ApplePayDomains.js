'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const StripeResource = require('../StripeResource.js');
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
exports.default = StripeResource.extend({
  path: 'apple_pay/domains',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{domain}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  del: stripeMethod({
    method: 'DELETE',
    path: '/{domain}',
  }),
});
