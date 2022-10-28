'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const StripeResource = require('../StripeResource.js');
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
exports.default = StripeResource.extend({
  path: 'subscriptions',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{subscriptionExposedId}',
  }),
  update: stripeMethod({
    method: 'POST',
    path: '/{subscriptionExposedId}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  cancel: stripeMethod({
    method: 'DELETE',
    path: '/{subscriptionExposedId}',
  }),
  del: stripeMethod({
    method: 'DELETE',
    path: '/{subscriptionExposedId}',
  }),
  deleteDiscount: stripeMethod({
    method: 'DELETE',
    path: '/{subscriptionExposedId}/discount',
  }),
  search: stripeMethod({
    method: 'GET',
    path: '/search',
    methodType: 'search',
  }),
});
