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
        <div className="searchcont">
          <div className="hotbox">
            <div className="hot">
              热门搜索
            </div>
            <ul>
              <li>特产</li>
              <li>景点</li>
            </ul>
          </div>
          <div className="historybox">
            <div className="searchhis">
              搜索历史
            </div>
            <div className="goodsense">
              哪里比较好玩
            </div>
          </div>
          <div className="senselive">
            景点直播
          </div>
          <div className="clear">
            <span class="iconfont iconlajitong garbage"></span>
            <span>清除历史</span>
          </div>
        </div> 

      </div>
    )
  }
}
export default Com;