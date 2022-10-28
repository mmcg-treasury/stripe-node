import * as StripeResource from '../../../StripeResource.js';
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
export default StripeResource.extend({
  path: 'test_helpers/terminal/readers',
  presentPaymentMethod: stripeMethod({
    method: 'POST',
    path: '/{reader}/present_payment_method',
  }),
});
