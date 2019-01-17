import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import DayCard from '../../ui/js/components/DayCard'

configure({adapter: new Adapter()});


// create any initial state needed
const dayKey = 17916;
const dayData = '[{"temp":285.652,"temp_min":285.652,"temp_max":285.652,"pressure":930.22,"sea_level":1029.06,"grnd_level":930.22,"humidity":96,"temp_kf":0,"weather":"Clear","wind":{"speed":3.47,"deg":107.002},"timestamp":1547942400},{"temp":288.966,"temp_min":288.966,"temp_max":288.966,"pressure":931.99,"sea_level":1030.67,"grnd_level":931.99,"humidity":89,"temp_kf":0,"weather":"Clear","wind":{"speed":3.83,"deg":97.5015},"timestamp":1547953200},{"temp":298.186,"temp_min":298.186,"temp_max":298.186,"pressure":931.55,"sea_level":1028.51,"grnd_level":931.55,"humidity":46,"temp_kf":0,"weather":"Clear","wind":{"speed":4.46,"deg":83.5018},"timestamp":1547964000},{"temp":300.877,"temp_min":300.877,"temp_max":300.877,"pressure":928.68,"sea_level":1024.99,"grnd_level":928.68,"humidity":34,"temp_kf":0,"weather":"Clear","wind":{"speed":4.01,"deg":86.5104},"timestamp":1547974800},{"temp":299.403,"temp_min":299.403,"temp_max":299.403,"pressure":928.05,"sea_level":1024.33,"grnd_level":928.05,"humidity":32,"temp_kf":0,"weather":"Clear","wind":{"speed":3.62,"deg":95.5031},"timestamp":1547985600},{"temp":292.69,"temp_min":292.69,"temp_max":292.69,"pressure":930.1,"sea_level":1027.34,"grnd_level":930.1,"humidity":53,"temp_kf":0,"weather":"Clear","wind":{"speed":4.46,"deg":118.507},"timestamp":1547996400},{"temp":289.511,"temp_min":289.511,"temp_max":289.511,"pressure":931.17,"sea_level":1029.17,"grnd_level":931.17,"humidity":78,"temp_kf":0,"weather":"Clear","wind":{"speed":4.02,"deg":117},"timestamp":1548007200},{"temp":287.169,"temp_min":287.169,"temp_max":287.169,"pressure":929.72,"sea_level":1028.15,"grnd_level":929.72,"humidity":92,"temp_kf":0,"weather":"Clear","wind":{"speed":3.81,"deg":104.5},"timestamp":1548018000}]';
// here it is possible to pass in any middleware if needed into //configureStore


test('render day card', () => {
    let wrapper = shallow(<DayCard day={dayKey} dayData={JSON.parse(dayData)}/>)
    let expectedHtml =  "<div class=\"flip-card\"><div class=\"flip-card-inner\"><div class=\"flip-card-front\"><div><h4>Day : Sun Jan 20 2019</h4><div>Max Temp : 27.73 C at <span>14:30</span></div><div>Min Temp : 12.50 C at <span>5:30</span></div><div>Max Humidity : 96% at <span>5:30</span></div><div>Min Humidity : 32% at <span>17:30</span></div></div></div><div class=\"flip-card-back\"><h4>Hourly Forecast</h4><div class=\"hourly-table\"><table><thead><tr><th>Time</th><th>Temprature</th><th>Humidity</th><th>Weather</th></tr></thead><tbody><tr><td><span>5:30</span></td><td>12.50 C</td><td>96%</td><td>Clear</td></tr><tr><td><span>8:30</span></td><td>15.82 C</td><td>89%</td><td>Clear</td></tr><tr><td><span>11:30</span></td><td>25.04 C</td><td>46%</td><td>Clear</td></tr><tr><td><span>14:30</span></td><td>27.73 C</td><td>34%</td><td>Clear</td></tr><tr><td><span>17:30</span></td><td>26.25 C</td><td>32%</td><td>Clear</td></tr><tr><td><span>20:30</span></td><td>19.54 C</td><td>53%</td><td>Clear</td></tr><tr><td><span>23:30</span></td><td>16.36 C</td><td>78%</td><td>Clear</td></tr><tr><td><span>2:30</span></td><td>14.02 C</td><td>92%</td><td>Clear</td></tr></tbody></table></div></div></div></div>";
    expect( wrapper.html()).toEqual(expectedHtml)
});

test('flipping day card',()=>{
    let wrapper = shallow(<DayCard day={dayKey} dayData={JSON.parse(dayData)}/>)
    let expectedHtml =  "<div class=\"flip-card\"><div class=\"flip-card-inner\"><div class=\"flip-card-front\"><div><h4>Day : Sun Jan 20 2019</h4><div>Max Temp : 27.73 C at <span>14:30</span></div><div>Min Temp : 12.50 C at <span>5:30</span></div><div>Max Humidity : 96% at <span>5:30</span></div><div>Min Humidity : 32% at <span>17:30</span></div></div></div><div class=\"flip-card-back\"><h4>Hourly Forecast</h4><div class=\"hourly-table\"><table><thead><tr><th>Time</th><th>Temprature</th><th>Humidity</th><th>Weather</th></tr></thead><tbody><tr><td><span>5:30</span></td><td>12.50 C</td><td>96%</td><td>Clear</td></tr><tr><td><span>8:30</span></td><td>15.82 C</td><td>89%</td><td>Clear</td></tr><tr><td><span>11:30</span></td><td>25.04 C</td><td>46%</td><td>Clear</td></tr><tr><td><span>14:30</span></td><td>27.73 C</td><td>34%</td><td>Clear</td></tr><tr><td><span>17:30</span></td><td>26.25 C</td><td>32%</td><td>Clear</td></tr><tr><td><span>20:30</span></td><td>19.54 C</td><td>53%</td><td>Clear</td></tr><tr><td><span>23:30</span></td><td>16.36 C</td><td>78%</td><td>Clear</td></tr><tr><td><span>2:30</span></td><td>14.02 C</td><td>92%</td><td>Clear</td></tr></tbody></table></div></div></div></div>";
    expect( wrapper.html()).toEqual(expectedHtml);
    wrapper.simulate('click');
    let expectedFlippedHtml =  "<div class=\"flip-card\"><div class=\"flip-card-inner flipped\"><div class=\"flip-card-front\"><div><h4>Day : Sun Jan 20 2019</h4><div>Max Temp : 27.73 C at <span>14:30</span></div><div>Min Temp : 12.50 C at <span>5:30</span></div><div>Max Humidity : 96% at <span>5:30</span></div><div>Min Humidity : 32% at <span>17:30</span></div></div></div><div class=\"flip-card-back\"><h4>Hourly Forecast</h4><div class=\"hourly-table\"><table><thead><tr><th>Time</th><th>Temprature</th><th>Humidity</th><th>Weather</th></tr></thead><tbody><tr><td><span>5:30</span></td><td>12.50 C</td><td>96%</td><td>Clear</td></tr><tr><td><span>8:30</span></td><td>15.82 C</td><td>89%</td><td>Clear</td></tr><tr><td><span>11:30</span></td><td>25.04 C</td><td>46%</td><td>Clear</td></tr><tr><td><span>14:30</span></td><td>27.73 C</td><td>34%</td><td>Clear</td></tr><tr><td><span>17:30</span></td><td>26.25 C</td><td>32%</td><td>Clear</td></tr><tr><td><span>20:30</span></td><td>19.54 C</td><td>53%</td><td>Clear</td></tr><tr><td><span>23:30</span></td><td>16.36 C</td><td>78%</td><td>Clear</td></tr><tr><td><span>2:30</span></td><td>14.02 C</td><td>92%</td><td>Clear</td></tr></tbody></table></div></div></div></div>"
    expect( wrapper.html()).toEqual(expectedFlippedHtml);
    wrapper.simulate('click');
    expect( wrapper.html()).toEqual(expectedHtml);
});

