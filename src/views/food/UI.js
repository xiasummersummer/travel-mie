import React, { Component } from 'react';
import '@/views/css/food.scss'

class Com extends Component {
  constructor(props){
    super(props)
    this.state=({
      foodlists: []
    })
  }
  componentDidMount () {
    this.props.getFoodlist();
  }
  goreturn () {
    this.props.history.go(-1)
  }
  gofooddetail () {
    
  }
  render () {
    return (
      <div className="foodBox">
        <div className="foodheader">
          <span className = "goback iconfont iconfanhuijiantou1" onClick={this.goreturn.bind(this)}></span>
          <div className="search">
              <span className = "foodsearch iconfont iconsousuo1"></span>
              <input type="text" placeholder = "请输入内容" />
          </div>
        </div>
        <div className="content">
            <div className = "searchCondition">
              <ul className="foodnav">
                <li className = "all">全部</li>
                <li>今日推荐</li>
                <li>老字号</li>
                <li>距离最近</li>
                <li>距离最近</li>
              </ul>
              <ul className="foodnav">
                <li className = "all">价格</li>
                <li>平民</li>
                <li>亲民</li>
                <li>商务</li>
                <li>高端</li>
                <li>星级</li>
              </ul>
            </div>
            <div className="foodMain">
              { 
                this.props.foodlist.map((item,index)=>{
                  return(
                  <div className="foodlist" onClick={this.gofooddetail.bind(this)} key={index}>
                  <div className="fl-l">
                    <img src={item.itemimage} alt=""/>
                  </div>
                  <div className="flinfo">
                    <div className="titlebox">
                      <h3 className="titlename">
                        {item.name}
                      </h3>
                      <div className="count">
                        {item.countnum}
                      </div>
                    </div>
                    <div className="adv">
                      {item.decribe}
                    </div>
                    <div className="addressbox">
                      <div className="address">
                        <span className="iconfont icondizhi1"></span>
                        <span className="addressname">{
                          item.add
                        }</span>
                      </div>
                      <div className="salenum">
                        {item.salenum}
                      </div>
                    </div>
                  </div>
                </div>
                  )
                })
              }
            </div>
        </div>
      </div>
    )
  }
}

export default Com;
