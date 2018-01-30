import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import DashboardCardHeader from './DashboardCardHeader';
import DashboardCardContent from './DashboardCardContent';
import DashboardCardFooter from './DashboardCardFooter';


const style = {
  height: 300,
  width: 300,
  margin: 20,
  display: 'inline-block',
};

class DashboardCard extends React.Component {
  render() {
    return (
      <div>
        <Paper style={style} zDepth={3}>
          <DashboardCardHeader />
          <DashboardCardContent />
          <DashboardCardFooter />
        </Paper>
        <Paper style={style} zDepth={3}>
        <DashboardCardHeader />
        <DashboardCardContent />
        <DashboardCardFooter />
        </Paper>
        <Paper style={style} zDepth={3}>
        <DashboardCardHeader />
        <DashboardCardContent />
        <DashboardCardFooter />
        </Paper>
        <Paper style={style} zDepth={3}>
        <DashboardCardHeader />
        <DashboardCardContent />
        <DashboardCardFooter />
        </Paper>
      </div>
      );
    }
}


export default DashboardCard;
