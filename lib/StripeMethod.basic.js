'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.del = exports.update = exports.retrieve = exports.list = exports.create = void 0;
const stripeMethod = require('./StripeMethod.js');
('use strict');
exports.create = stripeMethod({
  method: 'POST',
});
exports.list = stripeMethod({
  method: 'GET',
  methodType: 'list',
});
exports.retrieve = stripeMethod({
  method: 'GET',
  path: '/{id}',
});
exports.update = stripeMethod({
  method: 'POST',
  path: '{id}',
});
exports.del = stripeMethod({
  method: 'DELETE',
  path: '{id}',
});
exports.default = {
  create: exports.create,
  list: exports.list,
  retrieve: exports.retrieve,
  update: exports.update,
  del: exports.del,
};
