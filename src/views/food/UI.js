import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';
import '@/views/css/food.scss'

const foodDetail = [{
  img: 'https://img.bj520.com/201902/277cff4681.jpg',
  h5: '老白家腊纸肉夹馍',
  span: '4.9好评',
  p: '184元'
},
{
  img: 'https://img.bj520.com/201905/e347513bb6.jpg',
  h5: '不是不是（西安火车站）',
  span: '4.9好评',
  p: '184元'
},
{
  img: 'https://img.bj520.com/201902/277cff4681.jpg',
  h5: '你放假独守空房可视对讲',
  span: '4.9好评',
  p: '184元'
},
{
  img: 'https://img.bj520.com/201902/277cff4681.jpg',
  h5: '你放假独守空房可视对讲',
  span: '4.9好评',
  p: '184元'
},
{
  img: 'https://img.bj520.com/201902/277cff4681.jpg',
  h5: '你放假独守空房可视对讲',
  span: '4.9好评',
  p: '184元'
},
{
  img: 'https://img.bj520.com/201902/277cff4681.jpg',
  h5: '你放假独守空房可视对讲',
  span: '4.9好评',
  p: '184元'
},
{
  img: 'https://img.bj520.com/201902/277cff4681.jpg',
  h5: '你放假独守空房可视对讲',
  span: '4.9好评',
  p: '184元'
},
{
  img: 'https://img.bj520.com/201902/277cff4681.jpg',
  h5: '你放假独守空房可视对讲',
  span: '4.9好评',
  p: '184元'
},
{
  img: 'https://img.bj520.com/201905/e347513bb6.jpg',
  h5: '陇海间打飞机快递费电话费看得见风第三（西安火车站）',
  span: '4.9好评',
  p: '184元'
},]

class Com extends Component {
  componentDidMount () {

  }
  render () {
    return (
      <div className="foodBox">
        <div className="foodheader">
          <span className = "goback iconfont iconfanhuijiantou1"></span>
          <SearchBar placeholder="Search" style = {{ width:'70%'}} />
          <span className = "godetail iconfont icongengduo"></span>
        </div>
        <div className="content">
          <div>
            <div className = "searchCondition">
              <ul>
                <li class = "first">全部</li>
                <li>今日推荐</li>
                <li>老字号</li>
                <li>距离最近</li>
                <li>距离最近</li>
              </ul>
            </div>
            <div className="foodMain">
              <ul className = "foodDetail">
                {
                  foodDetail.map((item, index) => (
                    <li key = { index }> 
                      <img src = { item.img } alt=""/>
                      <h5>{ item.h5 }</h5>
                      <span>{ item.span }</span>
                      <p>{ item.p }</p>
                    </li>
                  ))
                }
              </ul>
            </div> 
          </div>
        </div>
      </div>
    )
  }
}

export default Com;
