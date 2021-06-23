export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_ BASKET'

export const addToCart = (product, quantity) => {
  return { type: ADD_TO_BASKET, product: product, quantity };
};

export const removeFromCart = productId => {
  return {type: REMOVE_FROM_BASKET, pid: productId}
};