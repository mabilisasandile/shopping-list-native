import {
    deleteItemRequest,
    deleteItemSuccess,
    deleteItemFailure,
  } from './dataActions';
  import { db } from '../config/firebase';
  
  export const deleteItem = (itemId) => {
    return async (dispatch) => {
      dispatch(deleteItemRequest());
  
      try {
        await db.collection('items').doc(itemId).delete();
        dispatch(deleteItemSuccess(itemId));
      } catch (error) {
        dispatch(deleteItemFailure(error));
      }
    };
  };