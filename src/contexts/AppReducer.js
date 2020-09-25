export const initialState = {
  basket: [],
  user: null,
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case 'REMOVE_FROM_BASKET':
      console.log(action.payload);

      return {
        ...state,
        basket: state.basket.filter((b) => b.id !== action.payload),
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default AppReducer;
