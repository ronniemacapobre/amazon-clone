export const initialState = {
  basket: [],
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
    default:
      return state;
  }
};

export default AppReducer;
