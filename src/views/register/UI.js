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
  // changeusername(){}
  // changesendcode(){}
  // sendcodeClick () {
  //   let n = 10;
  //   this.setState({
  //     onoff: true,
  //     // sendcode: 60
  //   })
  //   this.timer = setInterval(()=>{
  //     if(n===0){
  //       this.setState({
  //         onoff:false
  //       })
  //       this.setState({
  //         sendcode: '发送验证码'
  //       });
  //       clearInterval(this.timer)
  //       console.log(n,1)
  //     } else {
  //       this.setState({
  //         sendcode: `请等待${n}s`
  //       })
  //       n--;
  //     }
  //   },1000)
  //   this.props.register()
  // }
  render(){
    console.log(this.props)
    return (
      <div className="registerbox">
        <div className="header">
          <span className="iconfont iconzuojiantou return"></span>
          <span className="registertit">注册账号</span>
        </div>
        <div className="registerinfo">
          <div className="areabox">
            <span className="area">中国</span>
            <div className="are-r">
              <span>0086</span>
              <span className="iconfont iconzuojian"></span>
            </div>
          </div>
          <div className="regphone">
            <input type="tell" className="tell" placeholder="请输入您的手机号码"/>
            <span className="onreg">本机一键注册</span>
          </div>
          <div className="code">
            <input type="code" placeholder="请输入短信验证码"/>
            <div className="getcode">
              获取验证码
            </div>
          </div>
          <div className="psd">
            <input type="password" placeholder="请输入密码"/>
            <span className="iconfont iconclose-eye closeeye"></span>
          </div>
          <div className="psdtips">
            密码由8-16位数据、字母或符号组成，至少含有两种以上的字符。
          </div>
          <div className="checkboxinfo">
            <span className="iconfont iconduoxuankuang square"></span>
            <span className="agree">已阅读并同意 <a href="##">《咩咩旅行服务协议》</a>  和 <a href="##">《隐私政策》</a></span>
          </div>
          <div className="reg">
           <span>注册并登录</span>
          </div>
        </div>
      </div>
    )
  }
}
export default Com;