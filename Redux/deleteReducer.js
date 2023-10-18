
import {
    DELETE_ITEM_REQUEST,
    DELETE_ITEM_SUCCESS,
    DELETE_ITEM_FAILURE,
  } from '../actionTypes';
  
  const initialState = {
    isDeleting: false,
    deleteError: null,
  };
  
  
  export const deleteReducer = (state = initialState, action) => {
    switch (action.type) {
      case DELETE_ITEM_REQUEST:
        return {
          ...state,
          isDeleting: true,
          deleteError: null,
        };
      case DELETE_ITEM_SUCCESS:
        return {
          ...state,
          isDeleting: false,
          deleteError: null,
        };
      case DELETE_ITEM_FAILURE:
        return {
          ...state,
          isDeleting: false,
          deleteError: action.payload.error,
        };
      default:
        return state;
    }
  };
  
 

  export default deleteReducer;
