import { ordersTypes } from '../types';

const { GET_ORDERS, DELETE_ORDERS } = ordersTypes;

const initialState = {
  data: [],
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        data: action.orders,
      };
    case DELETE_ORDERS:
      return {
        ...state,
        data: state.data.filter((order) => order.id !== action.id),
      };
    default:
      return state;
  }
};

export default ordersReducer;
