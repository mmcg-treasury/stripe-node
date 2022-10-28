import SubtleCryptoProvider from '../../lib/crypto/SubtleCryptoProvider.js';
import {webcrypto as webcrypto$0} from 'crypto';
import {expect as expect$0} from 'chai';
import {createCryptoProviderTestSuite} from './helpers.js';
('use strict');
const webcrypto = {webcrypto: webcrypto$0}.webcrypto;
const expect = {expect: expect$0}.expect;
// webcrypto is only available on Node 15+.
if (!webcrypto || !webcrypto.subtle) {
  console.log(
    `Skipping SubtleCryptoProvider tests. No 'webcrypto.subtle' available for ${process.version}.`
  );
  return;
}
describe('SubtleCryptoProvider', () => {
  const provider = new SubtleCryptoProvider(webcrypto.subtle);
  createCryptoProviderTestSuite(provider, true);
  it('does not support sync calls', () => {
    expect(() => {
      provider.computeHMACSignature('payload', 'secret');
    }).to.throw(/SubtleCryptoProvider cannot be used in a synchronous context/);
  });
  it('handles hex conversion properly (test boundaries + middle values)', async () => {
    const fakeCryptoInterface = {
      importKey: () => Promise.resolve({}),
      sign: () => {
        const buffer = new ArrayBuffer(3);
        const view = new Uint8Array(buffer);
        view[0] = 0;
        view[1] = 255;
        view[2] = 128;
        return Promise.resolve(buffer);
      },
    };
    const signature = await new SubtleCryptoProvider(
      fakeCryptoInterface
    ).computeHMACSignatureAsync('payload', 'secret');
    expect(signature).to.equal('00ff80');
  });
});
