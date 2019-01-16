import {createStore} from 'redux'
import combined from './reducers/combined'

export default function (state) {
    return createStore(combined, state)
}