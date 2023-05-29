import { createStore, combineReducers } from 'redux';

import { categoriesReducer, productsReducer } from './reducers';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
});

export default createStore(rootReducer);
