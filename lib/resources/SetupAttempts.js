'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const StripeResource = require('../StripeResource.js');
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
exports.default = StripeResource.extend({
  path: 'setup_attempts',
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
});
