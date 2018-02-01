import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import DashboardCardHeader from './DashboardCardHeader';
import DashboardCardTitle from './DashboardCardTitle';
import DashboardCardContent from './DashboardCardContent';
import PropTypes from 'prop-types';

const style = {
  height: 300,
  width: 300,
  margin: 20,
  display: 'inline-block',


};

class DashboardCard extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      value: true,
    };

    this.deleteTodo = this.deleteTodo.bind(this);
  }

    deleteTodo() {
      console.log(this.state.value);
      this.setState({
        value: false
        });
        console.log(this.state.value);
     }

  render() {
if(this.state.value === true){
      return (
        <React.Fragment>
        <Paper style={style} zDepth={3}>
          <DashboardCardHeader imageSrc={this.props.imageSrc} onDeleted={this.deleteTodo} />
          <DashboardCardTitle cardTitle={this.props.cardTitle} cardSubTitle={this.props.cardSubTitle} />
          <DashboardCardContent>
          {this.props.children}
          </DashboardCardContent>
        </Paper>
  </React.Fragment>
        );
      }else{
        return null;
      }


    }
}


export default DashboardCard;
