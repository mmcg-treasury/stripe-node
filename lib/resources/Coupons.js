'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const StripeResource = require('../StripeResource.js');
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
exports.default = StripeResource.extend({
  path: 'coupons',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{coupon}',
  }),
  update: stripeMethod({
    method: 'POST',
    path: '/{coupon}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  del: stripeMethod({
    method: 'DELETE',
    path: '/{coupon}',
  }),
});
