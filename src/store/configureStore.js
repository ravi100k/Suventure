import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import getProductReducer from '../reducers/getProductReducer';
import saveProductReducer from '../reducers/saveProductReducer';
import updateProductReducer from '../reducers/updateProductReducer';
import searchProductReducer from '../reducers/searchProductReducer';
import deleteProductReducer from '../reducers/deleteProductReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      data_get : getProductReducer,
      data_save : saveProductReducer,
      data_update : updateProductReducer,
      data_search : searchProductReducer,
      data_delete : deleteProductReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
