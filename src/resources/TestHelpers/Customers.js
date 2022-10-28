import * as StripeResource from '../../StripeResource.js';
// File generated from our OpenAPI spec
('use strict');
const stripeMethod = StripeResource.method;
export default StripeResource.extend({
  path: 'test_helpers/customers',
  fundCashBalance: stripeMethod({
    method: 'POST',
    path: '/{customer}/fund_cash_balance',
  }),
});
