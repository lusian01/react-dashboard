import React, { Component } from 'react';
import DashboardCard from './DashboardCard/DashboardCard'

class DashboardPage extends React.Component {
  render() {
    return (
      <div className="DashboardPage">
        <DashboardCard  imageSrc="http://img.tenasia.hankyung.com/webwp_kr/wp-content/uploads/2017/09/2017092116364588197-540x810.jpg" cardTitle="슬기" cardSubTitle="레드벨벳">
        dfsfs
        </DashboardCard>
        <DashboardCard  imageSrc="http://image.fmkorea.com/files/attach/new/20171107/425547776/654145381/829082810/6d7fb5d52834d8a923c07dbe83822710.jpg" cardTitle="피카츄" cardSubTitle="전기 포켓몬">
        dfsfs
        </DashboardCard>
        <DashboardCard  imageSrc="http://img.danawa.com/images/descFiles/4/493/3492689_1511047416808.jpeg" cardTitle="고양이">
        dfsfs
        </DashboardCard>
        <DashboardCard  imageSrc="http://img1.daumcdn.net/thumb/R1024x0/?fname=http://i1.daumcdn.net/cfile299/image/24599A4458B9A00516F789" cardTitle="예린" cardSubTitle="여자친구">
        dfsfs
        </DashboardCard>
      </div>
    );
  }
}

export default DashboardPage;
