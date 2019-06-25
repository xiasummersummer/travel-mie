import React from 'react';
import '@/views/css/islogin.scss';
import userLogo from '@/assets/logo.png';

class Com extends React.Component {
  render(){
    return (
      <div className="isloginbox">
        <div className="header"></div>
        <div className="islogincontent">
          <div className="user">
            <div className="userlogo">
              <img src={ userLogo } alt=""/>
            </div>
            <div className="userbottom">
              <h5>咩咩</h5>
              <p>Angel</p>
              <span>因为有梦，所以勇敢出发，选择出发，便只顾风雨兼程。</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;