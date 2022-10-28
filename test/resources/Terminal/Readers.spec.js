import testUtils from '../../../testUtils/index.js';
import {expect as expect$0} from 'chai';
('use strict');
const stripe = testUtils.getSpyableStripe();
const expect = {expect: expect$0}.expect;
describe('Terminal', () => {
  describe('Readers Resource', () => {
    describe('retrieve', () => {
      it('Sends the correct request', () => {
        stripe.terminal.readers.retrieve('rdr_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/terminal/readers/rdr_123',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });
    describe('create', () => {
      it('Sends the correct request', () => {
        stripe.terminal.readers.create({
          registration_code: 'a-b-c',
          label: 'name',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/terminal/readers',
          headers: {},
          data: {
            registration_code: 'a-b-c',
            label: 'name',
          },
          settings: {},
        });
      });
    });
    describe('del', () => {
      it('Sends the correct request', () => {
        stripe.terminal.readers.del('rdr_123');
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'DELETE',
          url: '/v1/terminal/readers/rdr_123',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });
    describe('update', () => {
      it('Sends the correct request', () => {
        stripe.terminal.readers.update('rdr_123', {
          label: 'name',
        });
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'POST',
          url: '/v1/terminal/readers/rdr_123',
          headers: {},
          data: {
            label: 'name',
          },
          settings: {},
        });
      });
    });
    describe('list', () => {
      it('Sends the correct request', () => {
        stripe.terminal.readers.list();
        expect(stripe.LAST_REQUEST).to.deep.equal({
          method: 'GET',
          url: '/v1/terminal/readers',
          headers: {},
          data: {},
          settings: {},
        });
      });
    });
  });
});
