import * as stripeMethod from './StripeMethod.js';
('use strict');
export const create = stripeMethod({
  method: 'POST',
});
export const list = stripeMethod({
  method: 'GET',
  methodType: 'list',
});
export const retrieve = stripeMethod({
  method: 'GET',
  path: '/{id}',
});
export const update = stripeMethod({
  method: 'POST',
  path: '{id}',
});
export const del = stripeMethod({
  method: 'DELETE',
  path: '{id}',
});
export default {
  create,
  list,
  retrieve,
  update,
  del,
};
