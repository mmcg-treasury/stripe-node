'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const StripeResource = require('../../StripeResource.js');
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
exports.default = StripeResource.extend({
  path: 'financial_connections/accounts',
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{account}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  disconnect: stripeMethod({
    method: 'POST',
    path: '/{account}/disconnect',
  }),
  listOwners: stripeMethod({
    method: 'GET',
    path: '/{account}/owners',
    methodType: 'list',
  }),
  refresh: stripeMethod({
    method: 'POST',
    path: '/{account}/refresh',
  }),
});
