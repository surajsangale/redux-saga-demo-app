// import {createStore} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import productSaga from './ProductSaga';
import createSagaMiddleware from '@redux-saga/core';

// const  dummyReducer =()=>{
//     return 123
// }
// const store = createStore(dummyReducer);
// const store = createStore(rootReducer);
// const store = createStore ()
const SagaMiddleware = createSagaMiddleware();
const store = configureStore(
    {
        reducer: rootReducer,
        middleware: () => [SagaMiddleware]
    }
)
SagaMiddleware.run(productSaga)


export default store;   