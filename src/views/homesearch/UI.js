import React from 'react';
import '@/views/css/homesearch.scss'

class Com extends React.Component {
  constructor(props){
    super(props)
    this.state=({
      inputplaceholder: '请输入内容'
    })
  }
  searchclick (){
    this.setState({
      inputplaceholder: ''
    })
  }
  livesearch () {
    this.setState({
      inputplaceholder: '请输入内容'
    })
  }
  goreturn () {
    this.props.history.go(-1)
  }
  render () {
    return (
      <div className="homesearchbox">
        <div className="header">
          <div className="return iconfont iconzuojiantou" onClick={this.goreturn.bind(this)}></div>
          <div className="searchbox">
              <div className="searchl ">
                <div className="iconfont iconsousuo2"></div>
                <input type="text" onClick={this.searchclick.bind(this)} onBlur={this.livesearch.bind(this)} placeholder={this.state.inputplaceholder}/>
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
            <span className="iconfont iconlajitong garbage"></span>
            <span>清除历史</span>
          </div>
        </div> 

      </div>
    )
  }
}
export default Com;