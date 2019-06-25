import React from 'react'

const Com =() =>(
    <div className="phonenum">
      <div className="tell">
        <input type="tell" placeholder = "手机号/用户名/邮箱"/>
        </div>
        <div className="psd">
          <input type="password" className = "phonepsd" placeholder="请输入密码"/>
          <span className="iconfont iconclose-eye closeeye"></span>
        </div>
        <div className="login">
        <span>登录</span>
      </div>
      </div>
)

export default Com;