import React from 'react';

const Com =()=>(
    <div className="accountnum">
      <div className="tell">
        <input type="tell" className = "tel" placeholder = "请输入您的手机号码"/>
      </div>
      <div className="psd">
        <input type="password" className = "msg" placeholder="请输入短信验证码"/>
        <div className="getcode">
          获取验证码
        </div>
      </div>
      <div className="login msg">
        登录
      </div>
    </div>
)

export default Com;