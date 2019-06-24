import React from 'react';
import '@/views/css/homesearch.scss'

class Com extends React.Component {
  render () {
    return (
      <div className="homesearchbox">
        <div className="header">
          <div className="return iconfont iconzuojiantou"></div>
          <div className="searchbox">
              <div className="searchl ">
                <div className="iconfont iconsousuo2"></div>
                <input type="text" placeholder="请输入内容"/>
                <span className="reset">取消</span>
              </div>
          </div>
            <div className="ring iconfont iconPathx"></div>
        </div>
      </div>
    )
  }
}
export default Com;