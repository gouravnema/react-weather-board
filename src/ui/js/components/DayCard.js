import React from 'react'
import TimeOfDay from "./TimeOfDay";
import HourlyList from "./HourlyList";

export default class DayCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {flipped: false}
        this.toggleFlip = this.toggleFlip.bind(this)
    }

    renderMaxMinOfDay() {
        let maxTemp = {time: null, value: -273}
        let maxHumidity = {time: null, value: 0}
        let minTemp = {time: null, value: 373}
        let minHumidity = {time: null, value: 110}

        for (let index in this.props.dayData) {
            let data = this.props.dayData[index];
            if (data.temp > maxTemp.value) {
                maxTemp.value = data.temp;
                maxTemp.time = data.timestamp;
            }
            if (data.temp < minTemp.value) {
                minTemp.value = data.temp;
                minTemp.time = data.timestamp;
            }

            if (data.humidity > maxHumidity.value) {
                maxHumidity.value = data.humidity;
                maxHumidity.time = data.timestamp;
            }
            if (data.humidity < minHumidity.value) {
                minHumidity.value = data.humidity;
                minHumidity.time = data.timestamp;
            }
        }
        return <React.Fragment>
            <div>Max Temp : {(maxTemp.value - 273.15).toFixed(2)} C at <TimeOfDay timestamp={maxTemp.time}/></div>
            <div>Min Temp : {(minTemp.value - 273.15).toFixed(2)} C at <TimeOfDay timestamp={minTemp.time}/></div>
            <div>Max Humidity : {maxHumidity.value}% at <TimeOfDay timestamp={maxHumidity.time}/></div>
            <div>Min Humidity : {minHumidity.value}% at <TimeOfDay timestamp={minHumidity.time}/></div>
        </React.Fragment>
    }


    toggleFlip() {
        this.setState({flipped: !this.state.flipped});
    }

    render() {
        let classFlipped = this.state.flipped ? "flip-card-inner flipped" : "flip-card-inner";
        return <div className="flip-card" onClick={this.toggleFlip}>
            <div className={classFlipped}>
                <div className="flip-card-front">
                    <div>
                        <h4>Day : {(new Date(this.props.day * 86400 * 1000)).toDateString()}</h4>
                        {this.renderMaxMinOfDay()}
                    </div>
                </div>
                <div className="flip-card-back">
                    <h4>Hourly Forecast</h4>
                    <div className="hourly-table">
                        <HourlyList data={this.props.dayData}/>
                    </div>
                </div>
            </div>
        </div>
    }
}