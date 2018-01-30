import React, { Component } from 'react';
import DashboardCard from './DashboardCard/DashboardCard'

class DashboardPage extends React.Component {
  render() {
    return (
      <div className="DashboardPage">
        <DashboardCard />
      </div>
    );
  }
}

export default DashboardPage;
