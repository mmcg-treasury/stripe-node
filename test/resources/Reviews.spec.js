import testUtils from '../../testUtils/index.js';
import {expect as expect$0} from 'chai';
('use strict');
const stripe = testUtils.getSpyableStripe();
const expect = {expect: expect$0}.expect;
describe('Review Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.reviews.retrieve('prv_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/reviews/prv_123',
        data: {},
        headers: {},
        settings: {},
      });
    });
  });
  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.reviews.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/reviews',
        data: {},
        headers: {},
        settings: {},
      });
    });
  });
  describe('approve', () => {
    it('Sends the correct request', () => {
      stripe.reviews.approve('prv_123', {amount: 23});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/reviews/prv_123/approve',
        headers: {},
        data: {amount: 23},
        settings: {},
      });
    });
  });
});
