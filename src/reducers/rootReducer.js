import {
  FETCH_PRODUCTS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
} from "../actions/productAction";

import {
 SIGNUP,LOGIN
} from "../actions/userAction";


const initState = {
  products: [],
  users: [],
  orders: [],
  connectedUser:{}
};
const reducer = (state = initState, action) => {

  if (action.type === FETCH_PRODUCTS) {
    return { ...state, products: action.payload };
  }

  // if (action.type === ADD_PRODUCT) {
  // }
  if (action.type === LOGIN) {
    console.log("hereeeeeeeeeeeeeeeee reducer login",action.payload);
    if (action.payload.message==="2") {
      localStorage.setItem('connectedUser',JSON.stringify(action.payload.user))
      return { ...state, connectedUser: action.payload.user };
    }
  }

  return state;
};

export default reducer;
