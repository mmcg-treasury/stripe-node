'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const StripeResource = require('../../StripeResource.js');
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
exports.default = StripeResource.extend({
  path: 'radar/value_lists',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{valueList}',
  }),
  update: stripeMethod({
    method: 'POST',
    path: '/{valueList}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  del: stripeMethod({
    method: 'DELETE',
    path: '/{valueList}',
  }),
});
