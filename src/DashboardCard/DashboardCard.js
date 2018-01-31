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
      <div>
        <Paper style={style} zDepth={3}>
          <DashboardCardHeader imageSrc="http://img.tenasia.hankyung.com/webwp_kr/wp-content/uploads/2017/09/2017092116364588197-540x810.jpg" />
          <DashboardCardTitle cardTitle="슬기" cardSubTitle="레드벨벳" />
          <DashboardCardContent>
          dfsfs
          </DashboardCardContent>
        </Paper>
        <Paper style={style} zDepth={3}>
        <DashboardCardHeader imageSrc="http://image.fmkorea.com/files/attach/new/20171107/425547776/654145381/829082810/6d7fb5d52834d8a923c07dbe83822710.jpg" />
        <DashboardCardTitle cardTitle="피카츄" cardSubTitle="전기 포켓몬" />
        <DashboardCardContent>
        dfsfs
        </DashboardCardContent>
        </Paper>
        <Paper style={style} zDepth={3}>
        <DashboardCardHeader imageSrc="http://img.danawa.com/images/descFiles/4/493/3492689_1511047416808.jpeg"/>
        <DashboardCardTitle cardTitle="고양이" />
        <DashboardCardContent>
        dfsfs
        </DashboardCardContent>
        </Paper>
        <Paper style={style} zDepth={3}>
        <DashboardCardHeader imageSrc="http://img1.daumcdn.net/thumb/R1024x0/?fname=http://i1.daumcdn.net/cfile299/image/24599A4458B9A00516F789"/>
        <DashboardCardTitle cardTitle="예린" cardSubTitle="여자친구" />
        <DashboardCardContent>
        dfsfs
        </DashboardCardContent>
        </Paper>
      </div>
      );
    }
}


export default DashboardCard;
