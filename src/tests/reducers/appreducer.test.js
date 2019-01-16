import AppReducer from '../../ui/js/reducers/AppReducer'

const APP_REDUCER = new AppReducer();

test('update refresh on', () => {

    let action = {type: "REFRESH_DATA",timestamp:1547641763297};
    let reducer = APP_REDUCER.getReducer();
    let newState = reducer(null, action);

    expect(newState).toEqual({
        refreshedOn: 1547641763297
    });
});