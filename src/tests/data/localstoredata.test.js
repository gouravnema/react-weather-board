import LocalStoreData from '../../ui/js/data/LocalStoreData'

const localDataStore = new LocalStoreData();

test('store data in local store', () => {
    global.localStorage = {setItem:jest.fn()};
    localDataStore.store({data: 'some data'});
    expect(localStorage.setItem.mock.calls[0][1]).toBe(JSON.stringify({data: 'some data'}))
});

test('get data from local store', () => {
    let testdata = {data:'some data'};
    global.localStorage = {getItem:jest.fn()};
    localStorage.getItem.mockReturnValue(JSON.stringify(testdata))
    let data = localDataStore.fetch();
    expect(localStorage.getItem.mock.calls[0][0]).toBe('data');
    expect(data).toEqual(testdata);
});