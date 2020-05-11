import { combineReducers } from 'redux';
import ShoppingCartReducer from './shopping-cart-reducer';

const rootReducer = combineReducers({
    shoppingCartStore: ShoppingCartReducer,
});

export default rootReducer;