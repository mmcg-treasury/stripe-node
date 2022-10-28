import testUtils from '../../testUtils/index.js';
import {expect as expect$0} from 'chai';
('use strict');
const stripe = testUtils.getSpyableStripe();
const expect = {expect: expect$0}.expect;
describe('TaxRates Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.taxRates.retrieve('txr_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/tax_rates/txr_123',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
  describe('update', () => {
    it('Sends the correct request', () => {
      const data = {
        metadata: {a: '1234'},
      };
      stripe.taxRates.update('txr_123', data);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/tax_rates/txr_123',
        headers: {},
        data,
        settings: {},
      });
    });
  });
  describe('create', () => {
    it('Sends the correct request', () => {
      const data = {
        display_name: 'name',
        inclusive: false,
        percentage: 10.15,
      };
      stripe.taxRates.create(data);
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/tax_rates',
        headers: {},
        data,
        settings: {},
      });
    });
  });
  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.taxRates.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/tax_rates',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
});
