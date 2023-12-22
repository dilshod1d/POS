import * as types from "../types/cartTypes";

// Action to add item to cart
export const addToCart = (item) => (dispatch, getState) => {
    const cartItems = getState().cart.items;
    let alreadyExists = false;
  
    const updatedCartItems = cartItems.map((x) => {
      if (x.id === item.id) {
        alreadyExists = true;
        return { ...x, count: x.count + 1 }; // Increment count and return updated item
      }
      return x;
    });
  
    if (!alreadyExists) {
      updatedCartItems.push({ ...item, count: 1 }); // Push new item if not already in cart
    }
  
    dispatch({
      type: types.ADD_TO_CART,
      payload: updatedCartItems,
    });
  };

// Action to remove item from cart
export const removeFromCart = (itemId) => (dispatch, getState) => {
  const cartItems = getState()
    .cart.items.slice()
    .filter((x) => x.id !== itemId);
  dispatch({
    type: types.REMOVE_FROM_CART,
    payload: { cartItems },
  });
};

// Action to adjust item quantity in cart
export const adjustQuantity = (itemId, quantity) => (dispatch, getState) => {
  const cartItems = getState().cart.items.slice();
  cartItems.forEach((item) => {
    if (item.id === itemId) {
      item.count = quantity;
    }
  });
  dispatch({
    type: types.ADJUST_QUANTITY,
    payload: { cartItems },
  });
};

// Action to clear the cart
export const clearCart = () => (dispatch) => {
  dispatch({
    type: types.CLEAR_CART,
  });
};
