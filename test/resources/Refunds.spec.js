import testUtils from '../../testUtils/index.js';
import {expect as expect$0} from 'chai';
('use strict');
const stripe = testUtils.getSpyableStripe();
const expect = {expect: expect$0}.expect;
describe('Refund Resource', () => {
  describe('create', () => {
    it('Sends the correct request', () => {
      stripe.refunds.create({
        amount: '300',
        charge: 'ch_123',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/refunds',
        headers: {},
        data: {
          amount: '300',
          charge: 'ch_123',
        },
        settings: {},
      });
    });
  });
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.refunds.retrieve('re_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/refunds/re_123',
        data: {},
        headers: {},
        settings: {},
      });
    });
  });
  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.refunds.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/refunds',
        data: {},
        headers: {},
        settings: {},
      });
    });
  });
  describe('update', () => {
    it('Sends the correct request', () => {
      stripe.refunds.update('re_123', {metadata: {key: 'abcd'}});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/refunds/re_123',
        headers: {},
        data: {metadata: {key: 'abcd'}},
        settings: {},
      });
    });
  });
});
