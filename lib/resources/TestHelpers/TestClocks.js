'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const StripeResource = require('../../StripeResource.js');
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
exports.default = StripeResource.extend({
  path: 'test_helpers/test_clocks',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{testClock}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  del: stripeMethod({
    method: 'DELETE',
    path: '/{testClock}',
  }),
  advance: stripeMethod({
    method: 'POST',
    path: '/{testClock}/advance',
  }),
});
