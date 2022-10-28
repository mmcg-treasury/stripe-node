'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const StripeResource = require('../../StripeResource.js');
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
exports.default = StripeResource.extend({
  path: 'terminal/locations',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{location}',
  }),
  update: stripeMethod({
    method: 'POST',
    path: '/{location}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  del: stripeMethod({
    method: 'DELETE',
    path: '/{location}',
  }),
});
