import React from 'react';
import '@/views/css/user.scss';
import userAdd from '@/assets/useradd.png';
import One from '@/assets/one.png';
import Two from '@/assets/two.png';
import Tree from '@/assets/tree.png';
import Four from '@/assets/four.png';
import Five from '@/assets/five.png';
import Nologin from '@/components/common/Nologin';
import Login from '@/components/common/Login';

class Com extends React.Component {
  constructor (props) {
    super(props)
  }
  componentDidMount () {
    console.log(this.props.IsLogin)
  }
  goLogin (e) {
    if (e.target.className === 'loginbtn') {
      this.props.history.push('/login');
    }
  }
  render(){
    return (
      <div className="userbox">
        <div className="usercontainer">
            <div>
              <div className="header"></div>
              <div className="usercontent" onClick = { this.goLogin.bind(this) }>
                {
                  this.props.IsLogin ? <Login/> : <Nologin />
                }
                {/* <Login /> */}
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
                    <span className = "te">|</span>
                    <span>笔记</span>
                    <span className = "te">|</span>
                    <span>游记</span>
                    <span className = "te">|</span>
                    <span>问答</span>
                    <span className = "te">|</span>
                    <span>点评</span>
                    <span className = "te">|</span>
                  </div>
                  {/* <div className="img">
                    <img src={ userPhoto } alt=""/>
                    <img src={ userPhoto1 } alt=""/>
                  </div> */}
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