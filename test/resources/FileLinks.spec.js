import testUtils from '../../testUtils/index.js';
import {expect as expect$0} from 'chai';
('use strict');
const stripe = testUtils.getSpyableStripe();
const expect = {expect: expect$0}.expect;
describe('FileLinks Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request', () => {
      stripe.fileLinks.retrieve('link_123');
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/file_links/link_123',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
  describe('create', () => {
    it('Sends the correct request', () => {
      stripe.fileLinks.create({file: 'file_123'});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/file_links',
        headers: {},
        data: {file: 'file_123'},
        settings: {},
      });
    });
  });
  describe('update', () => {
    it('Sends the correct request', () => {
      stripe.fileLinks.update('link_123', {metadata: {key: 'value'}});
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'POST',
        url: '/v1/file_links/link_123',
        headers: {},
        data: {metadata: {key: 'value'}},
        settings: {},
      });
    });
  });
  describe('list', () => {
    it('Sends the correct request', () => {
      stripe.fileLinks.list();
      expect(stripe.LAST_REQUEST).to.deep.equal({
        method: 'GET',
        url: '/v1/file_links',
        headers: {},
        data: {},
        settings: {},
      });
    });
  });
});
