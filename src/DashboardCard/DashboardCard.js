import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import DashboardCardHeader from './DashboardCardHeader';
import DashboardCardTitle from './DashboardCardTitle';
import DashboardCardContent from './DashboardCardContent';


const style = {
  height: 300,
  width: 300,
  margin: 20,
  display: 'inline-block',
};

class DashboardCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Paper style={style} zDepth={3}>
          <DashboardCardHeader imageSrc={this.props.imageSrc} />
          <DashboardCardTitle cardTitle={this.props.cardTitle} cardSubTitle={this.props.cardSubTitle} />
          <DashboardCardContent>
          {this.props.children}
          </DashboardCardContent>
        </Paper>
      </React.Fragment>
      );
    }
}


export default DashboardCard;
