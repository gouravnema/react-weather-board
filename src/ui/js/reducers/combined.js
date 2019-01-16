import { combineReducers } from 'redux';
import DataReducer from './DataReducer'

const dataReducer = new DataReducer();

export default combineReducers({
    data: dataReducer.getReducer()
})
