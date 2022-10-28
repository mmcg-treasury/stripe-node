'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const StripeResource = require('../../../StripeResource.js');
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
exports.default = StripeResource.extend({
  path: 'test_helpers/treasury/outbound_transfers',
  fail: stripeMethod({
    method: 'POST',
    path: '/{outboundTransfer}/fail',
  }),
  post: stripeMethod({
    method: 'POST',
    path: '/{outboundTransfer}/post',
  }),
  returnOutboundTransfer: stripeMethod({
    method: 'POST',
    path: '/{outboundTransfer}/return',
  }),
});
