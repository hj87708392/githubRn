import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducer'

const logger = store => next => action =>{
    if(typeof action === 'function' ) {
        console.log(' dispatching a function')
    }else{
        console.log(' dispatching' ,action)
    }

    const result=next(action);
    console.log(' nextStare' ,store.getState());
    return result
}

const middleware=[
    thunk,
    logger
];
export default createStore(reducers,applyMiddleware(...middleware))
