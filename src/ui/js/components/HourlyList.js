import React from 'react'
import TimeOfDay from "./TimeOfDay";

export default class HourlyList extends React.Component {
    render() {
        let tableRows = this.props.data.map(day => {
            return <tr>
                <td><TimeOfDay timestamp={day.timestamp}/></td>
                <td>{(day.temp - 273.15).toFixed(2)} C</td>
                <td>{day.humidity}%</td>
                <td>{day.weather}</td>
            </tr>
        });
        return <table>
            <thead>
            <tr>
                <th>Time</th>
                <th>Temprature</th>
                <th>Humidity</th>
                <th>Weather</th>
            </tr>
            </thead>
            <tbody>
            {tableRows}
            </tbody>
        </table>
    }
}

