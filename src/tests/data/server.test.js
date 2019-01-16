import Server from '../../ui/js/data/servers'

const server = new Server();

test('fetch data from server', () => {
    global.fetch = jest.fn();
    let mockedPromise = {then:jest.fn()};
    fetch.mockReturnValue(mockedPromise);
    server.fetchWeatherForFiveDays();
    expect(fetch.mock.calls[0][0]).toEqual("http://api.openweathermap.org/data/2.5/forecast?id=1277333&appid=0d81389d01b7d93e5ecd20be6037d6ce")
});
