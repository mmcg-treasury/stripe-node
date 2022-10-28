import testUtils from '../../testUtils/index.js';
import {expect as expect$0} from 'chai';
('use strict');
const stripe = testUtils.getSpyableStripe();
const expect = {expect: expect$0}.expect;
describe('AccountLinks Resource', () => {
  describe('create', () => {
    it('Sends the correct request', () => {
      stripe.accountLinks.create({
        account: 'acct_123',
        failure_url: 'https://stripe.com/failure',
        success_url: 'https://stripe.com/success',
        type: 'custom_account_verification',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/account_links',
        headers: {},
        data: {
          account: 'acct_123',
          failure_url: 'https://stripe.com/failure',
          success_url: 'https://stripe.com/success',
          type: 'custom_account_verification',
        },
        settings: {},
      });
    });
  });
});
