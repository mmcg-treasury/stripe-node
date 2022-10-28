'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const StripeResource = require('../../StripeResource.js');
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
exports.default = StripeResource.extend({
  path: 'treasury/financial_accounts',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{financialAccount}',
  }),
  update: stripeMethod({
    method: 'POST',
    path: '/{financialAccount}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  retrieveFeatures: stripeMethod({
    method: 'GET',
    path: '/{financialAccount}/features',
  }),
  updateFeatures: stripeMethod({
    method: 'POST',
    path: '/{financialAccount}/features',
  }),
});
