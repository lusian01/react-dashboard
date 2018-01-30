import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import './Style/DashboardCardHeader.css';
import ActionHome from 'material-ui/svg-icons/action/home';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';

const circleStyle = {
  height: 80,
  width: 80,
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',
};

class DashboardCardHeader extends React.Component {
  render() {
    return (
      <div id="parent">
      <div className="CircleImage">
          <Paper style={circleStyle} zDepth={1} circle={true} />
      </div>
      <div className="TopContainer"></div>
       <div className="CardHeader">
          <IconButton tooltip="Font Icon">
            <ActionHome />
            <FontIcon className="muidocs-icon-action-home" color={red500} />
          </IconButton>
       </div>
      </div>
    );
  }
}


export default DashboardCardHeader;
