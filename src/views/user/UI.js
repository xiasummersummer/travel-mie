import React from 'react';
import '@/views/css/user.scss';
import userLogo from '@/assets/logo.png';
import userAdd from '@/assets/useradd.png';
import userPhoto from '@/assets/userphoto.png';
import userPhoto1 from '@/assets/userphoto1.png';
import userLogin from '@/assets/userlogin.png';
import One from '@/assets/one.png';
import Two from '@/assets/two.png';
import Tree from '@/assets/tree.png';
import Four from '@/assets/four.png';
import Five from '@/assets/five.png';

class Com extends React.Component {
  // componentDidMount () {
  //   this.props.getBannerListData()
  // }
  render(){
    console.log(this.props)
    return (
      <div className="userbox">
        <div className="usercontainer">
            <div>
              <div className="header"></div>
              <div className="usercontent">
                {/* <div className="userlogo">
                  <div className="top">
                    <span className = "iconfont iconxinxi first"></span>
                    <img src={ userLogo } alt=""/>
                    <span className = "iconfont iconshezhi last"></span>
                  </div>
                  <div className="bottom">
                    <h5>咩咩</h5>
                    <p>Angel</p>
                    <span>因为有梦，所以勇敢出发，选择出发，便只顾风雨兼程。</span>
                  </div>
                </div> */}
                <div className="gologin">
                  <img src= { userLogin } alt=""/>
                  <p>登录后享受更多优惠及服务</p>
                  <div className="loginbtn">
                    <span>登录/注册</span>
                  </div>
                </div>
                <div className="footprin">
                  <h5>我的足迹</h5>
                  <p>点击生成足迹地图</p>
                </div>
                <div className="usertravels">
                  <h5>我的游记</h5>
                  <div className="usershare">
                    <img src={ userAdd } alt=""/>
                    <span>分享你的旅行图片</span>
                  </div>
                  <p>用照片记录旅行的小技巧</p>
                  <div className="usertip">
                    <span>|</span>
                    <span>笔记</span>
                    <span>|</span>
                    <span>游记</span>
                    <span>|</span>
                    <span>问答</span>
                    <span>|</span>
                    <span>点评</span>
                    <span>|</span>
                  </div>
                  <div className="img">
                    <img src={ userPhoto } alt=""/>
                    <img src={ userPhoto1 } alt=""/>
                  </div>
                </div>
                <div className="myorder">
                  <h5>我的订单</h5>
                  <ul>
                    <li>
                      <img src= { One } alt=""/>
                      <p>待审核</p>
                    </li>
                    <li>
                      <img src= { Two } alt=""/>
                      <p>待支付</p>
                    </li>
                    <li>
                      <img src= { Tree } alt=""/>
                      <p>待出行</p>
                    </li>
                    <li>
                      <img src= { Four } alt=""/>
                      <p>待点评</p>
                    </li>
                    <li>
                      <img src= { Five } alt=""/>
                      <p>待付款</p>
                    </li>
                    </ul>
                </div>
                <div className="more">
                  <h5>更多服务</h5>
                  <ul>
                    <li>
                      <span className = "iconfont iconwomen"></span>
                      <p>我的</p>
                    </li>
                    <li>
                      <span className = "iconfont iconstar"></span>
                      <p>收藏</p>
                    </li>
                    <li>
                      <span className = "iconfont iconwallet_icon"></span>
                      <p>钱包</p>
                    </li>
                    <li>
                      <span className = "iconfont iconfollow"></span>
                      <p>关注</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}
export default Com;