import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import './Style/CircleImagePaper.css';
import ActionHome from 'material-ui/svg-icons/action/home';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';

const circleStyle = {
  height: 80,
  width: 80,
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',
};

class CircleImagePaper extends React.Component {
  render() {
    return (
      <React.Fragment>
          <Paper style={circleStyle} zDepth={1} circle={true} >
            <img className="circleImg" src={this.props.imageSrc} />
          </Paper>
      </React.Fragment>
    );
  }
}


export default CircleImagePaper;
