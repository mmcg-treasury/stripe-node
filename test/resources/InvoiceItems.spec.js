import testUtils from '../../testUtils/index.js';
import {expect as expect$0} from 'chai';
('use strict');
const stripe = testUtils.getSpyableStripe();
const expect = {expect: expect$0}.expect;
describe('InvoiceItems Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.invoiceItems.retrieve('invoiceItemIdTesting123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/invoiceitems/invoiceItemIdTesting123',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
  describe('create', () => {
    it('Sends the correct request', () => {
      stripe.invoiceItems.create({
        customer: 'cust_id_888',
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/invoiceitems',
        headers: {},
        data: {customer: 'cust_id_888'},
        settings: {},
      });
    });
  });
  describe('update', () => {
    it('Sends the correct request', () => {
      stripe.invoiceItems.update('invoiceItemId1', {
        amount: 1900,
      });
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/invoiceitems/invoiceItemId1',
        headers: {},
        data: {amount: 1900},
        settings: {},
      });
    });
  });
  describe('del', () => {
    it('Sends the correct request', () => {
      stripe.invoiceItems.del('invoiceItemId2');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'DELETE',
        url: '/v1/invoiceitems/invoiceItemId2',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.invoiceItems.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/invoiceitems',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
});
