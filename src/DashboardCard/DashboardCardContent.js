import React from 'react';
import './Style/DashboardCardContent.css';


class DashboardCardContent extends React.Component {
  render() {
    return (
      <div className="DashboardCardContentDiv">
        <div>
          <span className="CardTitle">Card title</span>
          <span className="CardSubTitle">Card Subtitle</span>
        </div>
      </div>
    );
  }
}


export default DashboardCardContent;
