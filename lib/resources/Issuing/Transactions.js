'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const StripeResource = require('../../StripeResource.js');
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
exports.default = StripeResource.extend({
  path: 'issuing/transactions',
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{transaction}',
  }),
  update: stripeMethod({
    method: 'POST',
    path: '/{transaction}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
});
