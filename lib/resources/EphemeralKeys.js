import * as StripeResource from '../StripeResource.js';
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
export default StripeResource.extend({
  path: 'ephemeral_keys',
  create: stripeMethod({
    method: 'POST',
    path: '',
    validator: (data, options) => {
      if (!options.headers || !options.headers['Stripe-Version']) {
        throw new Error(
          'Passing apiVersion in a separate options hash is required to create an ephemeral key. See https://stripe.com/docs/api/versioning?lang=node'
        );
      }
    },
  }),
  del: stripeMethod({
    method: 'DELETE',
    path: '/{key}',
  }),
});
