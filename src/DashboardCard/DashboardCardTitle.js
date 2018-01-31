import React from 'react';
import './Style/DashboardCardTitle.css';


class DashboardCardTitle extends React.Component {
  render() {
    return (
        <div className="DashboardCardTitleDiv">
          <span className="CardTitle">{this.props.cardTitle}</span>
          <span className="CardSubTitle">{this.props.cardSubTitle}</span>
        </div>
    );
  }
}


export default DashboardCardTitle;
