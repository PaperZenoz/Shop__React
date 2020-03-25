
import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {productListReducer} from "./productListReducer";
import {basketReducer} from "./basketReducer";


let rootReducer = combineReducers({
    productList: productListReducer,
    basket: basketReducer

})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>



// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));


// @ts-ignore
window.__store__ = store


// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


export default store;