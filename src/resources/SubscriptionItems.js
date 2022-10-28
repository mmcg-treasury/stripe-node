import * as StripeResource from '../StripeResource.js';
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
export default StripeResource.extend({
  path: 'subscription_items',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{item}',
  }),
  update: stripeMethod({
    method: 'POST',
    path: '/{item}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  del: stripeMethod({
    method: 'DELETE',
    path: '/{item}',
  }),
  createUsageRecord: stripeMethod({
    method: 'POST',
    path: '/{subscriptionItem}/usage_records',
  }),
  listUsageRecordSummaries: stripeMethod({
    method: 'GET',
    path: '/{subscriptionItem}/usage_record_summaries',
    methodType: 'list',
  }),
});
