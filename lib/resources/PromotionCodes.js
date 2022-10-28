'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const StripeResource = require('../StripeResource.js');
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
exports.default = StripeResource.extend({
  path: 'promotion_codes',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{promotionCode}',
  }),
  update: stripeMethod({
    method: 'POST',
    path: '/{promotionCode}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
});
