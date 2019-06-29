import React from 'react';
// import axios from 'axios';
import '@/views/css/login.scss';
import * as ajax from '@/api';
import { Toast } from 'antd-mobile'
import Phonelogin from '@/components/homebox/Phonelogin.js'
import Homereg from '@/components/homebox/Homereg.js'
class Com extends React.Component {
  constructor(props){
    super(props)
    this.state=({
      username: '',
      password: '',
      msg:'',
      accountnum: true,
      phone:1,
      telOk: false,
      passwordOk: false,
      msgOk: false,
      msgCode:''
    })
  }
  phoneclogin () {
    this.setState({
      phone:1
    })
  }
  regclogin () {
    this.setState({
      phone:2
    })
  }
  toregister () {
    this.props.history.push('/register')
  }
  // changeusername(e){
  //   let uname = e.target.value;
  //   this.setState({
  //     username: uname
  //   })
  // }
  // changepassword(e){
  //   let upass = e.target.value;
  //   this.setState({
  //     password: upass
  //   })
  // }
  // handlelogin () {
  //   console.log(this.state.username)
  //   console.log(this.state.password)
  //   axios.post('http://www.daxunxun.com/users/login',{
  //     username: this.state.username,
  //     password: this.state.password
  //   }).then(res=>{
  //     console.log(res.data)
  //     if (res.data === 0) {
  //       Toast.info('登陆失败')
  //     } else if (res.data === 2) {
  //       Toast.info('没有该用户')
  //     } else if (res.data === -1) {
  //       Toast.info('密码错误')
  //     } else {
  //       Toast.info('登陆成功')
  //       // 有的需要注册即为登陆成功，跳转到首页
  //       // localStorage.setItem('isLogin', 'ok')
  //       // this.$router.push('/')
  //       this.props.history.push('/')
  //     }
  //   })
  // }
  loginClick (e) {
    if (e.target.className === 'login') {
      if (this.state.telOk && this.state.passwordOk) {
        console.log('登陆成功')
        this.props.changeIsLogin('ok');
        this.props.history.push('/user');
        ajax.login({
          username: this.state.username,
          password: this.state.password
        }).then(res => {
          console.log(res.data)
        })
      } else {
        console.log('请输入正确的手机号或密码')
      }
    } else if (e.target.className === "getcode") {
      ajax.sendMsg(this.state.username).then(res => {
        console.log(res.data)
        this.setState({
          msgCode: res.data.code
        })
      })
    } else if (e.target.className === "login msg") {
      if (this.state.telOk && this.state.msgOk) {
        console.log('登陆成功')
        this.props.changeIsLogin('ok');
        this.props.history.push('/user');
        ajax.login({
          username: this.state.username,
          password: this.state.password
        }).then(res => {
          console.log(res.data)
        })
      } else {
        console.log('请输入正确的手机号或密码')
      }
    }
  }
  loginBlur (e) {
    if (e.target.className === "phonepsd") {
      if (/^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/.test(e.target.value)) {
        // console.log('密码格式正确')
        // console.log(e.target.value)
        this.setState({
          telOk: true,
          password:e.target.value
        })
      } else {
        // console.log('密码格式不正确');
        this.setState({
          telOk: true,
          password:e.target.value
        })
      }
    } else if (e.target.className === "tel") {
      if (/^1[3456789]\d{9}$/.test(e.target.value)) {
        // console.log('手机格式正确')
        this.setState({
          passwordOk: true,
          username:e.target.value
        })
        console.log(this.state)
      } else {
        // console.log('手机格式不正确')
        this.setState({
          passwordOk: false
        })
      }
    } else if(e.target.className === "msg") {
      this.setState({
        msg: e.target.value
      })
      console.log(this.state)
      if (this.state.msgCode === this.state.msg) {
        this.setState({
          msgOk: true
        })
      } else {
        console.log('请输入正确的短信验证码');
        this.setState({
          msgOk: false
        })
      }
      
    }
  }

  componentDidMount () {
   
  }

  render(){
    return (
      <div className="loginbox">
        <div className="header">
          <span></span>
          <span className="iconfont iconfanhui return"></span>
          <div className="loginguide">
            <p className="lgt">登录后更精彩</p>
            <p className="lgb">咩咩旅行，期待与你的美丽相遇</p>
           <img className="logo" src={require('@/assets/loginlogo.png')} alt=""/>
          </div>
        </div>
          <div className="logintype" onClick = {this.loginClick.bind(this)} onBlur = {this.loginBlur.bind(this)}>
            <div className="type">
              <div onClick = { this.phoneclogin.bind(this) } className="account">
                <div>账号密码登录</div>
                <i className={this.state.phone===1?"active":''}></i>
              </div>
              <div onClick = { this.regclogin.bind(this) } className="phone">
                <div>手机验证码登录</div>
                <i  className={this.state.phone===2?"active":''}></i>
              </div>
            </div>
             {this.state.phone===1?<Phonelogin /> : <Homereg />}
            <div className="reglogin">
              <div className="register" onClick={this.toregister.bind(this)}>
                注册
              </div>
            </div>
            <div className="thirdtype">
              <div className="line">
                  <span></span>
                  <span>第三方登录</span>
                  <span></span>
              </div>
              <div className="typeslist">
                <span className="iconfont iconchangyonglogo28"></span>
                <span className="iconfont iconqq"></span>
                <span className="iconfont iconzhifubao"></span>
                <span className="iconfont iconweibo"></span>
              </div>
            </div>
            <div className="checkboxinfo">
              <span className="iconfont icondui dui"></span>
              <span className="agree">同意《咩咩旅行服务协议》和《隐私政策》</span>
            </div>
          </div>

        {/* <div className="userlogo">
          <img src="" alt=""/>
        </div>
        <div className="userinfo">
          <div className="tellreg">
            手机号登录
          </div>
          <input type="tell" className="tellnum" placeholder="请输入手机号" name="username" onChange={this.changeusername.bind(this)}/>
          <input type="password" className="writecode" placeholder="请输入密码" name="password" onChange={this.changepassword.bind(this)}/>
          <input type="submit" className="sendinfo" onClick={this.handlelogin.bind(this)} value="登陆"/>
        </div> */}
      </div>
    )
  }
}
export default Com;