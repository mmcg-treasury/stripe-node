import testUtils from '../../testUtils/index.js';
import {expect as expect$0} from 'chai';
('use strict');
const stripe = testUtils.getSpyableStripe();
const expect = {expect: expect$0}.expect;
describe('Setup Attempts Resource', () => {
  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.setupAttempts.list({setup_intent: 'si_123'});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/setup_attempts?setup_intent=si_123',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
});
