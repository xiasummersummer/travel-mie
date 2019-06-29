import React, { Component } from 'react';
import Homebanner from '@/components/homebox/Homebanner';
import * as ajax  from '@/api'
import '@/views/css/home.scss';

class Com extends Component {
  constructor (props) {
    super(props);
    // console.log(props)
    this.state = {
      value: '',
      count: 0,
      activeIndex: 0,
      recommendlist:['2','sd','we']
    }
  }
  componentDidMount () {
    this.props.getBannerListData()
    this.props.getLivedata()
    this.props.getLivebannerdata()
    // this.props.getProlistData()
    // axios.get('http://www.daxunxun.com/banner').then(res=>{
    //   console.log(res.data)
    // })
    // axios.get('http://www.daxunxun.com/douban').then(res =>{
    //   console.log(res.data)
    // })
    // axios.get('http://www.daxunxun.com/live').then(res=>{
    //   console.log(res.data)
    // })
    ajax.getRecommend().then(res=>{
      console.log(res.data)
      this.setState({
        recommendlist:res.data
      })
    })
  }
  gosenic(){
    this.props.history.push('/scenic')
  }
  gofood(){
    this.props.history.push('/food')
  }
  gosearch () {
    this.props.history.push('/homesearch')
  }
  render () {
    // console.log(store)
    // console.log(store.getState())
    // console.log(this.props)
    return (
      <div className = "box">
        <header className = "header">
          <div className="searchbox">
            <div className="searchl" onClick={this.gosearch.bind(this)}>
              <span className="search iconfont iconsousuo1"></span>
              <span className="write">
                请输入内容
              </span>
              <span className="reset">取消</span>
            </div>
            <div className="ring iconfont iconPathx"></div>
          </div>
        </header>
        <div className = "content">
        <Homebanner homebannerlist = {this.props.livebannerlist}/>
        {/* <Homeprolist homeprolist = {this.props.homeprolist}/> */}
        <div className="homenav">
          <div className="scenic" onClick={this.gosenic.bind(this)}>
            <span className="iconfont iconjingdian"></span>
            <p >景色</p>
          </div>
          <div className="stay">
            <span className="iconfont iconzhusu"></span>
            <p>住宿</p>
          </div>
          <div className="culture">
            <span className="iconfont iconmeishi1"></span>
            <p>文化</p>
          </div>
          <div className="food" onClick={this.gofood.bind(this)}>
            <span className="iconfont iconwenhua"></span>
            <p>美食</p>
          </div>
        </div>
        <div className="tripnews">
          <div className="tnl">旅游头条</div>
          <div className="newcont">
            <p>zjhjkhk</p>
            <p>洒家电话卡时间段</p>
          </div>
          <div className="rightarrow">
            <span className="iconfont iconzuojian"></span>
          </div>
        </div>
        <div className="live">
          <div className="livetitle">
            直播
          </div>
          <ul className="locklive">
            {this.props.liveimglist.map((item,index)=>{
              return (
                <li key={index}>
                  <img src={item.itemimage} alt=""/>
                  <p>{item.name}</p>
                </li>
              )
            })}
          </ul>
          <div className="livadv">
        <Homebanner homebannerlist = {this.props.homebannerlist}/>
          </div>
        </div>
        <div className="hotrecommend">
          <div className="hottitle">热门推荐</div>
          <div className="hotbanner">
          <Homebanner homebannerlist = {this.props.homebannerlist}/>
          </div>
          <div className="hotcontent">
           {
             this.state.recommendlist.map((item,index)=>{
               return (
                <li key={index} className="recommendlist">
                <img src={item.itemimage} alt=""className="recimg"/>
                <p className="recommtitle">{item.name}</p>
              </li>
               )
             })
           }
          </div>
          <div className="talkabout">
            <div className="talkabouttop">
              <div className="ttl"></div>
              <div className="say">
                说吧
              </div>
              <div className="look">
                查看全部
              </div>
            </div>
            <div className="talkcontent">
              <p>

              夏天最美好的样子，莫过于一会儿梨花带雨，一会儿晚来风急，空气濡湿清洌，一头撞进风里像撞进什么人怀里。大概是因为特别想去看海，所以跟朋友耐着酷暑硬是来了
                                                                                                                                
              </p>
            </div>
            <div className="change">
              换一批
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Com;