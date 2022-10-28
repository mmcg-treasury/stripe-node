'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const StripeResource = require('../../../StripeResource.js');
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
exports.default = StripeResource.extend({
  path: 'test_helpers/issuing/cards',
  deliverCard: stripeMethod({
    method: 'POST',
    path: '/{card}/shipping/deliver',
  }),
  failCard: stripeMethod({
    method: 'POST',
    path: '/{card}/shipping/fail',
  }),
  returnCard: stripeMethod({
    method: 'POST',
    path: '/{card}/shipping/return',
  }),
  shipCard: stripeMethod({
    method: 'POST',
    path: '/{card}/shipping/ship',
  }),
});
