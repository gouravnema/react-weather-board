import {createStore} from 'redux'
import combined from './reducers/combined'
import thunk from 'redux-thunk'

export default function (state) {
    return createStore(combined, state, applyMiddleware(thunk))
}