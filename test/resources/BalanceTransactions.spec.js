import testUtils from '../../testUtils/index.js';
import {expect as expect$0} from 'chai';
('use strict');
const stripe = testUtils.getSpyableStripe();
const expect = {expect: expect$0}.expect;
describe('BalanceTransactions Resource', function() {
  describe('retrieve', function() {
    it('Sends the correct request', function() {
      stripe.balanceTransactions.retrieve('txn_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/balance_transactions/txn_123',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
  describe('list', function() {
    it('Sends the correct request', function() {
      stripe.balanceTransactions.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/balance_transactions',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
});
