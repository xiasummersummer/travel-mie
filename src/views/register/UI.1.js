import React from 'react';
import '@/views/css/register2.scss'

class Com extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      sendcode: '点击验证手机号码并发送短信',
      onoff:false,
      username: '',
      passsword: ''
    }
  }
  changeusername(){}
  changesendcode(){}
  sendcodeClick () {
    let n = 10;
    this.setState({
      onoff: true,
      // sendcode: 60
    })
    this.timer = setInterval(()=>{
      if(n===0){
        this.setState({
          onoff:false
        })
        this.setState({
          sendcode: '发送验证码'
        });
        clearInterval(this.timer)
        console.log(n,1)
      } else {
        this.setState({
          sendcode: `请等待${n}s`
        })
        n--;
      }
    },1000)
    this.props.register()
  }
  render(){
    console.log(this.props)
    return (
      <div className="box">
        <div className="header">
          <span className="iconfont icon-fanhui"></span>
        </div>
        <div className="userlogo">
          <img src="" alt=""/>
        </div>
        <div className="userinfo">
          <div className="tellreg">
            手机号注册
          </div>
          <input type="tell" className="tellnum" placeholder="请输入注册手机号" onChange={this.changeusername.bind(this)}/>
          <input type="button" className={ this.state.onoff ? "sendcode dis" : 'sendcode'} 
          disabled={ this.state.onoff } onClick ={this.sendcodeClick.bind(this)} 
          value={this.state.sendcode}/>
          <input type="text" className="writecode" placeholder="请输入验证码" onChange={this.changesendcode.bind(this)}/>
          <input type="submit" className="sendinfo" placeholder="确定"/>
        </div>
      </div>
    )
  }
}
export default Com;