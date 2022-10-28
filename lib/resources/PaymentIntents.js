import * as StripeResource from '../StripeResource.js';
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
export default StripeResource.extend({
  path: 'payment_intents',
  create: stripeMethod({
    method: 'POST',
    path: '',
  }),
  retrieve: stripeMethod({
    method: 'GET',
    path: '/{intent}',
  }),
  update: stripeMethod({
    method: 'POST',
    path: '/{intent}',
  }),
  list: stripeMethod({
    method: 'GET',
    path: '',
    methodType: 'list',
  }),
  applyCustomerBalance: stripeMethod({
    method: 'POST',
    path: '/{intent}/apply_customer_balance',
  }),
  cancel: stripeMethod({
    method: 'POST',
    path: '/{intent}/cancel',
  }),
  capture: stripeMethod({
    method: 'POST',
    path: '/{intent}/capture',
  }),
  confirm: stripeMethod({
    method: 'POST',
    path: '/{intent}/confirm',
  }),
  incrementAuthorization: stripeMethod({
    method: 'POST',
    path: '/{intent}/increment_authorization',
  }),
  search: stripeMethod({
    method: 'GET',
    path: '/search',
    methodType: 'search',
  }),
  verifyMicrodeposits: stripeMethod({
    method: 'POST',
    path: '/{intent}/verify_microdeposits',
  }),
});
