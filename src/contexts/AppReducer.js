export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) => {
  return basket.length === 0
    ? 0
    : basket.reduce((acc, item) => acc + item.price, 0);
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.payload
      );

      let newBasket = [...state.basket];

      if ((index) => 0) {
        newBasket.splice(index, 1);
      }

      return {
        ...state,
        basket: newBasket,
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
};

export default AppReducer;
