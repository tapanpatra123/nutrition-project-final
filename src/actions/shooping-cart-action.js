import { client } from '.';

export function getShoopingList() {
  return dispatch => {
    dispatch({
      type: 'GET_SHOPPING_LIST_FULFILLED',
      payload: ""
      // payload: client.get('https://api.jsonbin.io/b/5e8c3a45af7c476bc47e477d', {
      // })
    })
  }
}

export function getAllIngredientsList(data){
  return dispatch => {
    dispatch({
      type: 'GET_ALL_INGREDIENTS_LIST',
      payload: data
    })
  }
}

export function updateCurrentPage(data){
  return dispatch => {
    dispatch({
      type: 'UPDATE_CURRENT_PAGE',
      payload: data
    })
  }
}

export function addToCartProduct(data){
  return dispatch => {
    dispatch({
      type: 'ADD_TO_CART_PRODUCT',
      payload: data
    })
  }
}