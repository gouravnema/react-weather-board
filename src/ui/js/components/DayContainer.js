import React from "react";
import {connect} from 'react-redux';
import DayCard from './DayCard';

class DayContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    renderDays() {
        let observations = this.props.observations;
        let days = {};
        let daysComponents = [];
        for (let observationKey in observations) {
            let observation = observations[observationKey];
            observation['timestamp'] = parseInt(observationKey);
            let day = parseInt(parseInt(observationKey) / 86400);
            if (days[day]) {
                days[day].push(observation);
                continue;
            }
            days[day] = [observation];
        }
        ;
        for (let dayKey in days) {
            daysComponents.push(<DayCard day={parseInt(dayKey)} dayData={days[dayKey]}/>);
        }
        return daysComponents;
    }

    render() {
        return <React.Fragment>
            <h2>Showing weather for next 5 days for Bengaluru City</h2>
            <div>
                Last updated on {(new Date(this.props.refreshedOn)).toLocaleString()}
                <div>
                    <button onClick={(e) => APP.loadFromServer()}>Refresh</button>
                </div>
            </div>
            <div>
                {this.renderDays()}
            </div>
        </React.Fragment>
    }
}


const mapStateToProps = function (state) {
    return {observations: state.data.observations, refreshedOn: state.app.refreshedOn}
}



export default connect(mapStateToProps, null)(DayContainer);