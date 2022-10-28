import testUtils from '../../../testUtils/index.js';
import {expect as expect$0} from 'chai';
('use strict');
const stripe = testUtils.getSpyableStripe();
const expect = {expect: expect$0}.expect;
describe('Identity', () => {
  describe('VerificationReport Resource', () => {
    describe('retrieve', () => {
      it('Sends the correct request', () => {
        stripe.identity.verificationReports.retrieve('vr_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/identity/verification_reports/vr_123',
          data: {},
          headers: {},
          settings: {},
        });
      });
    });
    describe('list', () => {
      it('Sends the correct request', () => {
        stripe.identity.verificationReports.list();
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/identity/verification_reports',
          data: {},
          headers: {},
          settings: {},
        });
      });
    });
  });
});
