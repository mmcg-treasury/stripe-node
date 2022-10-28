import testUtils from '../../../testUtils/index.js';
import {expect as expect$0} from 'chai';
('use strict');
const stripe = testUtils.getSpyableStripe();
const expect = {expect: expect$0}.expect;
describe('Issuing', () => {
  describe('Transactions Resource', () => {
    describe('retrieve', () => {
      it('Sends the correct request', () => {
        stripe.issuing.transactions.retrieve('ipi_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/issuing/transactions/ipi_123',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });
    describe('update', () => {
      it('Sends the correct request', () => {
        stripe.issuing.transactions.update('ipi_123', {
          metadata: {
            thing1: true,
            thing2: 'yes',
          },
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/issuing/transactions/ipi_123',
          headers: {},
          data: {
            metadata: {
              thing1: true,
              thing2: 'yes',
            },
          },
          settings: {},
        });
      });
    });
    describe('list', () => {
      it('Sends the correct request', () => {
        stripe.issuing.transactions.list();
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/issuing/transactions',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });
  });
});
