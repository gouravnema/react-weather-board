import LocalStore from '../data/LocalStoreData';
import Server from '../data/servers';


const localStore = new LocalStore();
const server = new Server();

export const refreshAction = ()=>(dispatch, getState)=>{
    const processData = (data) => {
        data.list.forEach(listEl => {
            dispatch({type: 'ADD_WEATHER_DATA', data: listEl});
        });
    };
    server.fetchWeatherForFiveDays()
        .then(data => {
            processData(data);
            dispatch({type: 'REFRESH_DATA', timestamp: Date.now()});
            localStore.store(getState());
        }).catch(()=>{
            alert("Cannot sync data from server. Try later");
        })
};


