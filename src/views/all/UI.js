import React from 'react';
import '@/views/css/all.scss'
import userLogo from '@/assets/logo.png';
import axios from 'axios'
class Com extends React.Component {
  state={
    list:[]
  }
  goback () {
    this.props.history.go(-1)
  }
  componentDidMount(){
    axios.get('http://www.daxunxun.com/alldetail').then(res=>{
      this.setState({
        list:res.data
      })
    })
  }
  
    render () {
      console.log(this.state)
    return (
      <div className="allbox">
        <div className="allheader">
          <span className="goback iconfont iconarrow-left-copy"  onClick = { this.goback.bind(this) }></span>
          <span className="middle">社区话题</span>
          <span className="alladd goback iconfont iconyuanquanjiahao"></span>
        </div>
        <div className="allcontent">
          <div>
            <div className="allnav">
              <span className = "all">全部</span>
              <span className = "allhot">热门</span>
              <span className = "allnew">最新</span>
              <span className = "allcare">关注</span>
            </div>
            <div className="alldetail">
                {
                this.state.list.map((item,index) => {
                  return (
                    // console.log(item)
                    <div className="userdetail" key={ index }>
                      <img src={ item.imgsrc } alt= { item.alt } className = "alllogo"/>
                        <span className="username">{ item.name }</span>
                        <span className="usergrade">{ item.grade }</span>
                        <div className="focus">
                          <span className = "alladd iconfont iconjiaguanzhu"></span>
                          <span className = "alltext">加关注</span>
                        </div>
                        <p className="card">{ item.card }</p>
                        <div className="usershare">
                          <p>决胜巅峰山h红大幅度个人给覆盖掉公害跨境啥的方式打开就发货电商粉红色的空间发货{ item.usershare }</p>
                          <button>展开<span className = "iconfont iconxiala"></span></button>
                        </div>
                        <div className="shareimg">
                            {
                              item.imglist.map((items,indexs) => {
                                console.log(items.itemimage,0)
                                return (
                                  <div className="tu" key={ indexs }>
                                    <img src = { items.itemimage } alt = { items.alt } />
                                  </div>
                                )
                              })
                            }
                        </div>
                        <div className="allbottom">
                          <span className="time">今天{ item.time }</span>
                          <div className="allright">
                            <span className="other iconfont icondianzan"></span>
                            <span className="num">{ item.like }</span>
                            <span className="other iconfont iconpinglun"></span>
                            <span className="num"> { item.comment }</span>
                            <span className="other iconfont iconyoujiantou"></span>
                          </div>
                        </div>
                        
                    </div>
                  )
                  })
                }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;