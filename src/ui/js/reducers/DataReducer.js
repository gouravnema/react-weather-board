import BaseReducer from './BaseReducer'

export default class DataReducer extends BaseReducer {
    constructor(){
        super();
        this.actions = {
            ADD_WEATHER_DATA:this.addWeatherData
        };
        this.defaultState = {observations: {}}
    }

    addWeatherData(state,action){
        state.observations[action.data['dt']] = action.data['main'];
        state.observations[action.data['dt']]['weather'] = action.data['weather'][0]['main'];
        state.observations[action.data['dt']]['wind'] = action.data['wind'];
        return state
    }
}