import testUtils from '../../testUtils/index.js';
import {expect as expect$0} from 'chai';
('use strict');
const stripe = testUtils.getSpyableStripe();
const expect = {expect: expect$0}.expect;
describe('Events Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.events.retrieve('eventIdBaz');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/events/eventIdBaz',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.events.list({count: 25});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/events?count=25',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
});
