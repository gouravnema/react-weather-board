import DataReducer from '../../ui/js/reducers/DataReducer'

const DATA_REDUCER = new DataReducer();

test('add weather data', () => {

    let data = {
        "dt": 1487613600,
        "main": {
            "temp": 274.443,
            "temp_min": 274.443,
            "temp_max": 274.443,
            "pressure": 968.19,
            "sea_level": 1042.66,
            "grnd_level": 968.19,
            "humidity": 88,
            "temp_kf": 0,
        },
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02n"
            }
        ],
        "clouds": {
            "all": 24
        },
        "wind": {
            "speed": 3.27,
            "deg": 257.501
        },
        "rain": {},
        "snow": {},
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2017-02-20 18:00:00"
    };

    let action = {type: "ADD_WEATHER_DATA", data};
    let reducer = DATA_REDUCER.getReducer();
    let newState = reducer(null, action);

    expect(newState).toEqual({
        observations: {
            1487613600: {
                temp_kf: 0,
                temp: 274.443,
                temp_min: 274.443,
                temp_max: 274.443,
                pressure: 968.19,
                sea_level: 1042.66,
                grnd_level: 968.19,
                humidity: 88,
                weather: "Clouds",
                wind: {
                    speed: 3.27,
                    deg: 257.501
                }
            }
        }
    });
});