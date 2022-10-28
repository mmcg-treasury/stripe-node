import testUtils from '../../testUtils/index.js';
import {expect as expect$0} from 'chai';
('use strict');
const stripe = testUtils.getSpyableStripe();
const expect = {expect: expect$0}.expect;
describe('Tokens Resource', () => {
  describe('create', () => {
    it('Sends the correct request', () => {
      stripe.tokens.create({
        card: {number: 123},
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/tokens',
        headers: {},
        data: {card: {number: 123}},
        settings: {},
      });
    });
  });
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.tokens.retrieve('tokenId1');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/tokens/tokenId1',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
});
