import React from 'react';
import './Style/CircleImagePaper.css';
import Paper from 'material-ui/Paper';

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
