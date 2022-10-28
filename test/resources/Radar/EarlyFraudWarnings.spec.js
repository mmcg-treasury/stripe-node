import testUtils from '../../../testUtils/index.js';
import {expect as expect$0} from 'chai';
('use strict');
const stripe = testUtils.getSpyableStripe();
const expect = {expect: expect$0}.expect;
describe('Radar', () => {
  describe('EarlyFraudWarnings Resource', () => {
    describe('retrieve', () => {
      it('Sends the correct request', () => {
        stripe.radar.earlyFraudWarnings.retrieve('issfr_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/radar/early_fraud_warnings/issfr_123',
          data: {},
          headers: {},
          settings: {},
        });
      });
    });
    describe('list', () => {
      it('Sends the correct request', () => {
        stripe.radar.earlyFraudWarnings.list();
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/radar/early_fraud_warnings',
          data: {},
          headers: {},
          settings: {},
        });
      });
    });
  });
});
