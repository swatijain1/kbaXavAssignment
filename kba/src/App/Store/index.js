import { createStore, applyMiddleware, combineReducers } from 'redux'

import reducers from '../Reducers'
import middlewares from '../Middlewares'

export default createStore(
    combineReducers(reducers),
    applyMiddleware(...middlewares)
)