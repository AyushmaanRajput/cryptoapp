import {
  GET_COINS_ERROR,
  GET_COINS_LOADING,
  GET_COINS_SUCCESS,
} from "./actionTypes";

const initState = {
  isLoading: false,
  isError: false,
  coins: [],
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_COINS_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: true,
      };
    case GET_COINS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case GET_COINS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        coins: action.payload,
      };
    default:
      return state;
  }
};
