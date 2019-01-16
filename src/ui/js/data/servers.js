const API_KEY = '0d81389d01b7d93e5ecd20be6037d6ce';
const city_id = 1277333; //city id 1277333 for Bangalore

export default class Server {
    /*
    * get data for five days for given city
    * returns Promise<data>
    * */
    fetchWeatherForFiveDays() {
        let url = 'http://api.openweathermap.org/data/2.5/forecast?id=' + city_id + '&appid=' + API_KEY
        return fetch(url).then(responese => responese.json());
    }


}