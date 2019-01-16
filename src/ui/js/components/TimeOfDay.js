import React, {Fragment} from 'react'


export default class TimeOfDay extends React.Component{
    render(){
        let date = new Date(this.props.timestamp * 1000);
        date = new Date(date.getTime());
        let timeOfDay = date.getHours() + ':' + date.getMinutes()
        return <Fragment>
            <span>{timeOfDay}</span>
        </Fragment>
    }
}