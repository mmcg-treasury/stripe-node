'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const StripeResource = require('../../StripeResource.js');
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
exports.default = StripeResource.extend({
  path: 'issuing/cardholders',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{cardholder}',
  }),
  update: stripeMethod({
    method: 'POST',
    path: '/{cardholder}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
});
