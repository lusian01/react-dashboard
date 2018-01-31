import React from 'react';
import './Style/DashboardCardContent.css';


class DashboardCardContent extends React.Component {
  render() {
    return (
      <div className="DashboardCardContentDiv">
        {this.props.children}
      </div>
    );
  }
}


export default DashboardCardContent;
