
import { UPDATE_ITEM_SUCCESS, UPDATE_ITEM_ERROR } from '../actionTypes';

const initialState = {
  items: [],
};

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              ItemName: action.payload.ItemName,
              itemDescription: action.payload.itemDescription,
              amount: action.payload.amount,
              quantity: action.payload.quantity,
            };
          }
          return item;
        }),
      };
    case UPDATE_ITEM_ERROR:
      console.log('Update item error: ', action.payload.error);
      return state;
    default:
      return state;
  }
};

export default itemReducer;