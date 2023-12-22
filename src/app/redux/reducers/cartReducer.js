import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADJUST_ITEM_QUANTITY,
  CLEAR_CART,
  LOAD_CART_ITEMS,
  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS,
  CHECKOUT_FAILURE,
} from "../types/cartTypes";

const initialState = {
  items: [], // {id, title, quantity, price}
  checkoutStatus: {
    checkoutPending: false,
    checkoutError: null,
    checkoutSuccess: false,
  },
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: action.payload,
      };
    // case ADD_TO_CART: {
    //   const newItem = action.payload;
    //   const existingItem = state.items.find((item) => item.id === newItem.id);

    //   if (existingItem) {
    //     // Increment quantity
    //     return {
    //       ...state,
    //       items: state.items.map((item) =>
    //         item.id === newItem.id
    //           ? { ...item, quantity: item.quantity + 1 }
    //           : item
    //       ),
    //     };
    //   } else {
    //     // Add new item to cart
    //     return {
    //       ...state,
    //       items: [...state.items, { ...newItem, quantity: 1 }],
    //     };
    //   }
    // }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    }
    case ADJUST_ITEM_QUANTITY: {
      const { itemId, quantity } = action.payload;
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === itemId ? { ...item, quantity: quantity } : item
        ),
      };
    }
    case CLEAR_CART: {
      return {
        ...state,
        items: [],
      };
    }
    case LOAD_CART_ITEMS: {
      return {
        ...state,
        items: action.payload,
      };
    }
    case CHECKOUT_REQUEST: {
      return {
        ...state,
        checkoutStatus: {
          checkoutPending: true,
          checkoutError: null,
          checkoutSuccess: false,
        },
      };
    }
    case CHECKOUT_SUCCESS: {
      return {
        ...state,
        items: [],
        checkoutStatus: {
          checkoutPending: false,
          checkoutError: null,
          checkoutSuccess: true,
        },
      };
    }
    case CHECKOUT_FAILURE: {
      return {
        ...state,
        checkoutStatus: {
          checkoutPending: false,
          checkoutError: action.payload,
          checkoutSuccess: false,
        },
      };
    }
    default:
      return state;
  }
}

export default cartReducer;
