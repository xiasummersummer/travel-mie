import React from 'react';
// import Homebanner from '@/components/homebox/Homebanner'
import '@/views/css/sensedetail.scss'
// import { Carousel, WingBlank } from 'antd-mobile'
// import axios from 'axios';
import '@/views/css/ticket.scss';

const checkArr = [
  {
    txt:'checkbox1',
  },
  {
    txt:'checkbox2',
  },
  {
    txt:'checkbox3',
  }
]

class Com extends React.Component {
  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      detailbanner: ['1','2'],
      val: 1,
      time1: '1970-1-1',
      time2: '1970-1-2'

    }
  }

  checkClick (index) {  // 这是我写的 
    this.setState({
      ['check' +index]: !this.state['check' +index]
    })
  }    //这是我写的

  componentDidMount () {
    // for(let i in this.refs){   // 这是我写的 
    //   this.setState({
    //     i: false
    //   }) // 这是我写的 
    // }
    let d1 = new Date();
    let Today = d1;
    let time1 = Today.toLocaleDateString();
    this.setState({
      time1: time1.split('/').join('-')
    })
    d1.setDate(d1.getDate()+1);
    // d1.setTime(d1.getDate() +1 );

    let time2 = d1.toLocaleDateString();
    this.setState({
      time2: time2.split('/').join('-')
    })
    // console.log(time1,time2,d1)
  }
  render(){
        // {console.log(this.state.detailbanner)}
        // console.log(this.props)
    return (
      <div className="ticketbox">
        <div className="tickethead">
          <div className="ticketleft iconfont icon-zuojiantou"></div>
          <div className="tickettitle">
            订单填写
          </div>
        </div>
        <div className="ticketname">
          <div className="tickettitle">
            华清池门票
          </div>
          <div className="time">
            <span className="usetime">使用日期</span>
            <div className="nowtime">
              <ul>
                <li>{ this.state.time1 }</li>
                <li>{ this.state.time2 }</li>
                <li>更多日期</li>
              </ul>
            </div>
          </div>
          <div className="humanticketbox">
            <div className="htprice">
              <span className="hticket">成人票</span>
              <div className="price">
                ¥120
              </div>
            </div> 
            <div className="checkinfo">
             {
               checkArr.map((item, index) =>{
                 return (     // 这是我写的 
                  <label key = { index} className = { this.state['check'+index] ? 'iconfont iconduoxuankuang2' : 'iconfont iconduoxuankuang' }  htmlFor = { 'checkbox'+ (index +1) }  > <input ref={ 'check' +index}  onClick = { this.checkClick.bind(this,index) } type = 'checkbox' id = { 'checkbox' + (index +1) } />{ item.txt }</label>  // 这是我写的 
                 )
               }
               
               )
             }
              <div className="timereset"></div>
              <span>随时退票111</span>
            </div>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    )
  }
}
export default Com;