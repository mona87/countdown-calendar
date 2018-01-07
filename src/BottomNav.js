import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import github from './github'

const icon = <FontIcon ></FontIcon>;



class BottomNav extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation style={{position: 'fixed', bottom: 0}} selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="GitHub"
            icon={icon}
            onClick={() => window.open('https://github.com')}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNav;