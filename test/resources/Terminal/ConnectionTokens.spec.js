import testUtils from '../../../testUtils/index.js';
import {expect as expect$0} from 'chai';
('use strict');
const stripe = testUtils.getSpyableStripe();
const expect = {expect: expect$0}.expect;
describe('Terminal', () => {
  describe('ConnectionToken Resource', () => {
    describe('create', () => {
      it('Sends the correct request', () => {
        stripe.terminal.connectionTokens.create({});
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/terminal/connection_tokens',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });
  });
});
