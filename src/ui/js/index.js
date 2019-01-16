import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

//indexing other components for build using webpack entrypoint compilation.

import '../index.pug';
//css files
import '../sass/style.scss';

// loading app store
import Store from './store';

import Server from './data/servers';
import LocalStore from './data/LocalStoreData';

import DayContainer from './components/DayContainer';

import {loadAndStoreData} from './data/SyncManager'

const localStore = new LocalStore();

const renderUI = (store) => {
    let RootComponent = <Provider store={store}>
        <DayContainer/>
    </Provider>
    ReactDOM.render(RootComponent, document.getElementById('root'));
};

const initialDataState = localStore.fetch();

window.APP = {
    loadFromServer:()=>{
        loadAndStoreData(renderUI);
    }
}

if (initialDataState !== null) {
    const store = Store(initialDataState);
    renderUI(store);
} else {
    APP.loadFromServer();
}
