'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const StripeResource = require('../../StripeResource.js');
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
exports.default = StripeResource.extend({
  path: 'apps/secrets',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  deleteWhere: stripeMethod({
    method: 'POST',
    path: '/delete',
  }),
  find: stripeMethod({
    method: 'GET',
    path: '/find',
  }),
});
