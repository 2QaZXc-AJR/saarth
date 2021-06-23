import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from '../Actions/Basket';
import { ADD_ORDER } from '../Actions/Order';
import CartItem from '../../Model/BasketItem';

const initialState = {
  items: {},
  totalMrp: 0,
  totalAmount: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      const addedProduct = action.product;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;
      const prodMrp = addedProduct.mrp;
      const prodType = addedProduct.type;
      const quantity = action.quantity;

      let updatedOrNewCartItem;

      if (state.items[addedProduct.id]) {
        updatedOrNewCartItem = new CartItem(
          state.items[addedProduct.id].quantity + quantity,
          prodPrice,
          state.items[addedProduct.id].mrp + (prodMrp * quantity),
          prodType,
          prodTitle,
          state.items[addedProduct.id].sum + (prodPrice * quantity)
        );
      } else {
        updatedOrNewCartItem = new CartItem(quantity, prodPrice, 
          (prodMrp * quantity), prodType, prodTitle, (prodPrice * quantity));
      }
      return {
        ...state,
        items: { ...state.items, [addedProduct.id]: updatedOrNewCartItem },
        totalMrp: state.totalMrp + (prodMrp * quantity),
        totalAmount: state.totalAmount + (prodPrice * quantity)
      };
      case REMOVE_FROM_BASKET:
        const selectedCartItem = state.items[action.pid];
        const currentQty = selectedCartItem.quantity;
        let updatedCartItems;
        if (currentQty > 1) {
          const updatedCartItem = new CartItem(
            selectedCartItem.quantity - 1,
            selectedCartItem.productPrice,
            selectedCartItem.mrp - selectedCartItem.productMrp,
            selectedCartItem.type,
            selectedCartItem.productTitle,
            selectedCartItem.sum - selectedCartItem.productPrice
          );
          updatedCartItems = { ...state.items, [action.pid]: updatedCartItem };
        } else {
          updatedCartItems = { ...state.items };
          delete updatedCartItems[action.pid];
        }
        return {
          ...state,
          items: updatedCartItems,
          totalMrp: state.totalMrp - selectedCartItem.productMrp,
          totalAmount: state.totalAmount - selectedCartItem.productPrice
        };
        case ADD_ORDER:
          return initialState;
  }
  return state;
};
