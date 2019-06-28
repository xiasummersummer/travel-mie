import React from 'react';
// import Homebanner from '@/components/homebox/Homebanner'
import '@/views/css/sensedetail.scss';
import * as ajax from '@/api';
// import axios from './node_modules/axios';

class Com extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      detailbanner: ['1','2'],
      showAll: false
    }
  }
  componentDidMount () {
    const { id } = this.props.match.params;
    ajax.getSenseDetail(id).then(res => {
      console.log(res.data)
    })
  }
  goreturn () {
    this.props.history.go(-1)
  }
  clickdislay () {
    this.setState({
      showAll: !this.state.showAll
    })
  }
  render(){
        // {console.log(this.state.detailbanner)}
        // console.log(this.props)
    return (
      <div className="detailbox">
        <div className="detailtop">
          <div className="detailleft iconfont iconzuojiantou" onClick={this.goreturn.bind(this)}></div>
          <div className="detitle">
            景点详情页
          </div>
        </div>
        <div className="detailbanner">
        {/* <Homebanner homebannerlist = {this.props.detailbanner}/> */}
        {console.log(this.state.detailbanner)}
        </div>
          <div className="senseinfobox">
          <div className="sensename">
            <div className="sensenameinfo">
              <h3 className="sensetitle">华清池</h3>
              <div className="telltip">
                <span>zuiwan是多少</span>
                <em>|</em>
                <span>xuzhi</span>
                <em>|</em>
                <span>play</span>
              </div>
            </div>
            <div className="recommend">
              <div className="rencount">5fen</div>
              <div className="renum">1.6wnpingjia</div>
            </div>
          </div>
          {/* <div className="recommendstar">
            <span>推荐指数</span>
            <div className="starbox">
              <span className="iconfont iconiconfontxingxing"></span>
              
            </div>
          </div> */}
          <div className="senseinfo">
            <div className="sensetitle">景点详情</div>
            <div className="infobox">
              <div className="address">
                <span className="iconfont icondizhi1"></span>
                <span className="add">地址</span>
                <span className="add-dis">西安市梭梭树</span>
              </div>
              <div className="tell">
                <span className="iconfont icondianhua1"></span>
                <span className="tell-name">电话</span>
                <span className="tellnum">13348799898</span>
              </div>
              <div className="time">
                <span className="iconfont iconshijian00"></span>
                <span className="storetime">营业时间</span>
                <span className="timedis">6:00-19:00</span>
              </div>
              <div className="ticket">
                <span className="iconfont iconmenpiao"></span>
                <span className="tickname">门票</span>
                <span>¥120.00</span>
                <span className="reserve">立即预定<span className="iconfont iconyoujian"></span></span>
              </div>
            </div>
          </div>
          <div className="introuduce">
            <div className="intit">景点介绍</div>
            <div className="sensemsg">
              时间都很少看见后
            </div>
          </div>
          <div className="visitortalk">
            <div className="visitortitle">游客点评</div>
            <div className="visitorcontent">
              <div className="userinfo">
                <img src="" alt=""/>
                <div className="username">
                  anna
                </div>
              </div>
              <div className="usercontent">
                <p className="talkabout" ref="txt" style = {{height:!this.state.showAll ? '.42rem' : '1.26rem'}}>时间都很少看见后时间都很少看见后时间都很少看见后时时间都很少看见后时间都很少看见后时间都很少看见后时时间都很少时间都很少看见后时时间都很少时间都很少看见后时时间都很少看见后时间都很少看见后时间都很少看见后时时间都很少看见后时间都很少看见后时间都很少看见后时间都很少看见后</p>
                <div className="display" ref = "showAll" onClick={this.clickdislay.bind(this)}>
                  <span>展开全文</span><span className="iconfont iconjiantou"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="hopecomments">
            <div className="hl">
              <span className="iconfont iconxie"></span>
              <div className="gowrite">
                期待你的神评论
              </div>
            </div>
            <div className="clickxin">
              <span className="iconfont iconxin"></span>
              <span className="like">喜欢</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Com;