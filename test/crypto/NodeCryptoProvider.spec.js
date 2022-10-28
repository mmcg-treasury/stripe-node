import NodeCryptoProvider from '../../lib/crypto/NodeCryptoProvider.js';
import {createCryptoProviderTestSuite} from './helpers.js';
('use strict');
describe('NodeCryptoProvider', () => {
  createCryptoProviderTestSuite(new NodeCryptoProvider());
});
