
import { db } from '../config/firebase';
import * as actionTypes from './actionTypes';
import { 
DELETE_ITEM_SUCCESS, 
DELETE_ITEM_REQUEST, 
DELETE_ITEM_FAILURE } from './actionTypes';
import { updateItemInFirestore } from '../reducers/firestore';

export const updateItemSuccess = (item) => {
  return {
    type: actionTypes.UPDATE_ITEM_SUCCESS,
    payload: {
      id: item.id,
      itemName: item.itemName,
      itemDescription: item.itemDescription,
      amount: item.amount,
      itemQuantity: item.itemQuantity
    }
  };
};

export const updateItemError = (error) => {
  return {
    type: actionTypes.UPDATE_ITEM_ERROR,
    payload: {
      error
    }
  };
};

export const updateItem = (item) => {
  return dispatch => {
    updateItemInFirestore(item)
      .then(() => {
        dispatch(updateItemSuccess(item));
      })
      .catch(error => {
        dispatch(updateItemError(error));
      });
  };
};

//Delete actions
export const deleteItemRequest = () => ({
    type: DELETE_ITEM_REQUEST,
  });
  
  export const deleteItemSuccess = (itemId) => ({
    type: DELETE_ITEM_SUCCESS,
    payload: {
      itemId,
    },
  });
  
  export const deleteItemFailure = (error) => ({
    type: DELETE_ITEM_FAILURE,
    payload: {
      error,
    },
  });

