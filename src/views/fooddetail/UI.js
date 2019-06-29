import React from 'react';
// import Homebanner from '@/components/homebox/Homebanner'
import '@/views/css/sensedetail.scss'
import { Carousel } from 'antd-mobile'
import axios from 'axios';

class Com extends React.Component {
  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      detailbanner: ['1','2']
    }
  }
  componentDidMount () {
    // this.props.getBannerListData()
    axios.get('http://api9.wochu.cn/client/v1/app/layoutamend?parameters=%7B%22version%22:%2210.0.0%22,%22source%22:%22H%22%7D').then(res=>{
      console.log(res.data)
      this.setState({
        detailbanner: res.data.data.carousel
      })
    })
  }
  goreturn () {
    this.props.history.go(-1)
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
        <Carousel
          autoplay
          infinite
          style={{ display: 'inline-block', width: '100%', height: 176 }}>
          {this.state.detailbanner.map((val,index) => (
            <a
              key={index}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val.picUrl}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
              />
            </a>
          ))}
        </Carousel>
        </div>
          <div className="senseinfobox">
          <div className="sensename">
            华清池
          </div>
          <div className="recommendstar">
            <span>推荐指数</span>
            <div className="starbox">
              <span className="iconfont iconiconfontxingxing"></span>
              
            </div>
          </div>
          <div className="senseinfo">
            <div className="sensetitle">景点信息</div>
            <div className="infobox">
              <div className="address">
                <span className="iconfont icondizhi1"></span>
                <span className="add">地址</span>
                <span className="add-dis">西安市梭梭树</span>
                <span className="lockmore">查看更多</span>
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
                <span className="reserve">预定</span>
              </div>
            </div>
          </div>
          <div className="introuduce">
            <div className="intit">景点介绍</div>
            <div className="sensemsg">
              时间都很少看见后
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Com;