import Store from "../store";
import Server from "./servers";
import LocalStore from "./LocalStoreData";

const store = Store({});
const server = new Server();

const localStore = new LocalStore();

export const loadAndStoreData = (next) => {

    const processData = (data) => {
        data.list.forEach(listEl => {
            store.dispatch({type: 'ADD_WEATHER_DATA', data: listEl});
        });
    };
    server.fetchWeatherForFiveDays()
        .then(data => {
            processData(data);
            store.dispatch({type:'REFRESH_DATA', timestamp:Date.now()});
            localStore.store(store.getState());
            next(store);
        }).catch(err=>{
            console.error(err)
         alert("Cannot sync data from server. Try later");
    })
};