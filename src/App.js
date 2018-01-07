import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import DatePicker from 'material-ui/DatePicker';
import Clock from './Clock';
import BottomNav from './BottomNav';



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            deadline: localStorage.getItem('date') || 'December 25, 2018',
        }
    }
    pastDates(date) {
        //disable past dates
        return Date.parse(date) - Date.parse(new Date()) < 0;
    }
    resetTime(date) {
        //reset countdown a a year from current day
        let time = Date.parse(date) - Date.parse(new Date());
        if (time <= 0) {

            let newDate = new Date();

            newDate.setDate(newDate.getDate() + 365);
            return newDate
        }
        return false
    }
    handleChange = (e, date) => {
        //get month, day and year

        date = this.resetTime(date) || date
        let locale = "en-us",
            month = date.toLocaleString(locale, { month: "long" }),
            day = date.toLocaleString(locale, { day: "2-digit" }),
            year = date.toLocaleString(locale, { year: "numeric" });
        localStorage.setItem('date', `${month} ${day}, ${year}`);

        this.setState({
            deadline: `${month} ${day}, ${year}`
        })
    }

	render() {
		return(
			<MuiThemeProvider  muiTheme={getMuiTheme(darkBaseTheme)}>
			  <AppBar 
			  style={{textAlign: 'center'}}
			  title="Countdown Calendar" 
				showMenuIconButton={false}
			  />
			<div className="App">
				<div className="title" > Countdown to <span className="date-wrapper">{this.state.deadline}</span></div>
				<Clock deadline={this.state.deadline} />
				<div>
				  <DatePicker 
				  hintText="Choose a date" 
				  hideCalendarDate={true}
				  onChange={ this.handleChange}
				  autoOk={true}
				  shouldDisableDate={this.pastDates}
				  />
				</div>
			</div>
			<BottomNav />
		  </MuiThemeProvider>
		)
	}
}

DatePicker.propTypes = {
  hintText: PropTypes.string
};

MuiThemeProvider.propTypes = {
  children: PropTypes.array
};


export default App;