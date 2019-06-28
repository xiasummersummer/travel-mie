import React, { Component } from 'react';
import Homebanner from '@/components/homebox/Homebanner';
import '@/views/css/home.scss'

class Com extends Component {
  constructor (props) {
    super(props);
    console.log(props)
    this.state = {
      value: '',
      count: 0,
      activeIndex: 0
    }
  }
  componentDidMount () {
    this.props.getBannerListData()
    this.props.getLivedata()
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
    console.log(this.props)
    return (
      <div className = "box">
        <header className = "header">
          <div className="searchbox">
            <div className="searchl" onClick={this.gosearch.bind(this)}>
              <span className="search iconfont icon-sousuo2"></span>
              <span className="write">
                请输入内容
              </span>
              <span className="reset">取消</span>
            </div>
            <div className="ring iconfont iconPathx"></div>
          </div>
        </header>
        <div className = "content">
        <Homebanner homebannerlist = {this.props.homebannerlist}/>
        {/* <Homeprolist homeprolist = {this.props.homeprolist}/> */}
        <div className="homenav">
          <div className="scenic">
            <span className="iconfont iconjingdian"></span>
            <p onClick={this.gosenic.bind(this)}>景色</p>
          </div>
          <div className="stay">
            <span className="iconfont iconzhusu"></span>
            <p>住宿</p>
          </div>
          <div className="culture">
            <span className="iconfont iconmeishi1"></span>
            <p>文化</p>
          </div>
          <div className="food">
            <span className="iconfont iconwenhua"></span>
            <p onClick={this.gofood.bind(this)}>美食</p>
          </div>
        </div>
        <div className="tripnews">
          <div className="tnl">旅游头条</div>
          <div className="newcont">
            hsjahs
          </div>
          <div className="rightarrow">
            <span className="iconfont icon-jiantou"></span>
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
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </div>
          <div className="talkabout">
            <div className="talkabouttop">
              <div className="ttl">|</div>
              <div className="say">
                说吧
              </div>
              <div className="look">
                查看全部
              </div>
            </div>
            <div className="talkcontent">
              <p>圣诞节啊客户打卡机</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Com;