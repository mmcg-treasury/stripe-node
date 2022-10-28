import multipart from '../multipart.js';
import * as StripeResource from '../StripeResource.js';
// File generated from our OpenAPI spec
('use strict');
const {multipartRequestDataProcessor} = multipart;
const stripeMethod = StripeResource.method;
export default StripeResource.extend({
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
