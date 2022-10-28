import testUtils from '../../../testUtils/index.js';
import {expect as expect$0} from 'chai';
('use strict');
const stripe = testUtils.getSpyableStripe();
const expect = {expect: expect$0}.expect;
describe('Sigma', () => {
  describe('ScheduledQueryRun Resource', () => {
    describe('retrieve', () => {
      it('Sends the correct request', () => {
        stripe.sigma.scheduledQueryRuns.retrieve('sqr_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/sigma/scheduled_query_runs/sqr_123',
          data: {},
          headers: {},
          settings: {},
        });
      });
    });
    describe('list', () => {
      it('Sends the correct request', () => {
        stripe.sigma.scheduledQueryRuns.list();
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/sigma/scheduled_query_runs',
          data: {},
          headers: {},
          settings: {},
        });
      });
    });
  });
});
