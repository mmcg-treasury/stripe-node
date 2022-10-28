'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const StripeResource = require('../../../StripeResource.js');
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
exports.default = StripeResource.extend({
  path: 'test_helpers/treasury/outbound_payments',
  fail: stripeMethod({
    method: 'POST',
    path: '/{id}/fail',
  }),
  post: stripeMethod({
    method: 'POST',
    path: '/{id}/post',
  }),
  returnOutboundPayment: stripeMethod({
    method: 'POST',
    path: '/{id}/return',
  }),
});
