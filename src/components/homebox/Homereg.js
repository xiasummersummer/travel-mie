import React from 'react';

const Com =()=>(
    <div className="accountnum">
      <div className="tell">
        <input type="tell" placeholder = "请输入您的手机号码"/>
      </div>
      <div className="psd">
        <input type="password" placeholder="请输入短信验证码"/>
        <div className="getcode">
          获取验证码
        </div>
      </div>
      <div className="login">
        <span>登录</span>
      </div>
    </div>
)

export default Com;