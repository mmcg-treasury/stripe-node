import testUtils from '../../../testUtils/index.js';
import {expect as expect$0} from 'chai';
('use strict');
const stripe = testUtils.getSpyableStripe();
const expect = {expect: expect$0}.expect;
describe('Reporting', () => {
  describe('ReportTypes Resource', () => {
    describe('retrieve', () => {
      it('Sends the correct request', () => {
        stripe.reporting.reportTypes.retrieve('activity.summary.1');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/reporting/report_types/activity.summary.1',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });
    describe('list', () => {
      it('Sends the correct request', () => {
        stripe.reporting.reportTypes.list();
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/reporting/report_types',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });
  });
});
