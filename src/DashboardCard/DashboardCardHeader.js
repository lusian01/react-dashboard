import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import './Style/DashboardCardHeader.css';
import ActionHome from 'material-ui/svg-icons/action/home';
import {red500} from 'material-ui/styles/colors';
import CircleImagePaper from './CircleImagePaper';




class DashboardCardHeader extends React.Component {
  constructor(props){
    super(props);

}

  render() {
    console.log(this.props);
    return (
      <div id="parent">
      <div className="CircleImage">
        <CircleImagePaper imageSrc={this.props.imageSrc} />
      </div>
      <div className="topContainer"></div>
       <div className="cardHeader">
          <IconButton tooltip="Font Icon" onClick={this.props.onDeleted} >
            <ActionHome/>
            <FontIcon className="muidocs-icon-action-home" color={red500} />
          </IconButton>
       </div>
      </div>
    );
  }
}


export default DashboardCardHeader;
