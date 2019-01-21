import BaseReducer from './BaseReducer'

export default class AppReducer extends BaseReducer {
    constructor() {
        super();
        this.actions = {
            REFRESH_DATA: this.refreshData
        };
        this.defaultState = {refreshedOn: null}
    }

    refreshData(state, action) {
        return {refreshedOn: action.timestamp}
    }
}