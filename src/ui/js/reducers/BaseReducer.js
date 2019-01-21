export default class BaseReducer {
    constructor() {
        this.actions = {};
        this.defaultState = {};
    }

    clone(data) {
        return JSON.parse(JSON.stringify(data));
    }

    isApplicable(action) {
        return this.actions[action] !== undefined;
    }

    getReducer() {
        return (state = null, action) => {
            state = state || this.defaultState;
            let clonedState = this.clone(state);
            if (this.isApplicable(action.type)) {
                return this.actions[action.type](clonedState, action);
            }
            return clonedState;
        }
    }
}