'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const StripeResource = require('../StripeResource.js');
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
exports.default = StripeResource.extend({
  path: 'reviews',
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{review}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  approve: stripeMethod({
    method: 'POST',
    path: '/{review}/approve',
  }),
});
