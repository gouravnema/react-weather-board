import store from "../ui/js/store"


const STORE = store({});

test('store should return state', () => {
    let state = STORE.getState();
    expect(state).toEqual({
        app: {refreshedOn: null},
        data: {
            observations: {}
        }
    });
});

