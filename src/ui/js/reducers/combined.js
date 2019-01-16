import { combineReducers } from 'redux';
import DataReducer from './DataReducer';
import AppReducer from './AppReducer';

const dataReducer = new DataReducer();
const appReducer = new AppReducer();

export default combineReducers({
    app: appReducer.getReducer(),
    data: dataReducer.getReducer()
})
