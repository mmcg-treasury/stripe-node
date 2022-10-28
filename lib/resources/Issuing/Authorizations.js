'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const StripeResource = require('../../StripeResource.js');
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
exports.default = StripeResource.extend({
  path: 'issuing/authorizations',
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{authorization}',
  }),
  update: stripeMethod({
    method: 'POST',
    path: '/{authorization}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  approve: stripeMethod({
    method: 'POST',
    path: '/{authorization}/approve',
  }),
  decline: stripeMethod({
    method: 'POST',
    path: '/{authorization}/decline',
  }),
});
