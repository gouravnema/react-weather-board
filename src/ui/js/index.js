import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {refreshAction} from "./actions/refresh";

//indexing other components for build using webpack entrypoint compilation.
import '../img/flip.png';
import '../index.pug';
//css files
import '../sass/style.scss';

// loading app store
import Store from './store';

import LocalStore from './data/LocalStoreData';

import DayContainer from './components/DayContainer';

const localStore = new LocalStore();

const renderUI = (store) => {
    let RootComponent = <Provider store={store}>
        <DayContainer/>
    </Provider>
    ReactDOM.render(RootComponent, document.getElementById('root'));
};

const initialDataState = localStore.fetch();


if (initialDataState !== null) {
    const store = Store(initialDataState);
    renderUI(store);
} else {
    const store = Store();
    store.dispatch(refreshAction());
    renderUI(store);
}
