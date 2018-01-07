import React, {Component} from 'react';
import './App.css';


class Clock extends Component {
	constructor(props){
		super(props);
		this.state = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		}

	}

	componentWillMount(){

		this.getTimeUntil(this.props.deadline)
	}

	componentDidMount(){
		//update time
		setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
	}
	leading0(num){
		// ad 0 to single digits nums in countdown timer
		return num < 10 ? '0' + num : num;
	}
	getTimeUntil(deadline){
		//subtracts deadline from current time
		console.log(deadline, 'deadline')
		let time = Date.parse(deadline) - Date.parse(new Date());
		const seconds = Math.floor((time/1000)%60);
		const minutes = Math.floor((time/1000/60)%60);
		const hours = Math.floor(time/(1000*60*60)%24);
		const days = Math.floor(time/(1000*60*60*24));
		// console.log('sec', seconds, 'mins',minutes, 'hours', hours, 'days', days);
		this.setState({days, hours, minutes, seconds})
	}
	render() {
		return(				
			<div className="time-wrapper">
				<div className="clock-days">{this.leading0(this.state.days)} days</div>
				<div className="clock-hours">{this.leading0(this.state.hours)} hours</div>
				<div className="clock-minutes">{this.leading0(this.state.minutes)} minutes</div>
				<div className="clock-seconds">{this.leading0(this.state.seconds)} seconds</div>
			</div>
			)
	}
}

export default Clock;