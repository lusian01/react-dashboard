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
          <Paper style={circleStyle} zDepth={1} circle={true} >
          <img className="img-circle" src="http://img.tenasia.hankyung.com/webwp_kr/wp-content/uploads/2017/09/2017092116364588197-540x810.jpg" width="100%" height="100%" />
          </Paper>
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
