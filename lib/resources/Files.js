'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const multipart_js_1 = require('../multipart.js');
const StripeResource = require('../StripeResource.js');
// File generated from our OpenAPI spec
('use strict');
const {multipartRequestDataProcessor} = multipart_js_1.default;
const stripeMethod = StripeResource.method;
exports.default = StripeResource.extend({
  path: 'files',
  create: stripeMethod({
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    host: 'files.stripe.com',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{file}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  requestDataProcessor: multipartRequestDataProcessor,
});
