import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
// Import other reducers as needed
// import userReducer from './userReducer';
// import productReducer from './productReducer';
// ... any other reducers you might have ...

const rootReducer = combineReducers({
  // The key names here will define the keys in your state
  cart: cartReducer,
  // user: userReducer,
  // product: productReducer,
  // ... any other reducers you might have ...
});

export default rootReducer;
