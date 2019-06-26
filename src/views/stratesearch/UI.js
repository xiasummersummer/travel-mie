import React from 'react';
import '@/views/css/stratesearch.scss'
import * as ajax  from '@/api'

class Com extends React.Component {
  constructor(props){
    super(props)
    this.state=({
      inputplaceholder: 'search',
      stratesearchlist: []
    })
  }
  componentDidMount () {
    ajax.getstrateSearch().then(res =>{
      console.log(res.data);
      this.setState({
        stratesearchlist: res.data
      })
    })
  }
  searchclick (){
    this.setState({
      inputplaceholder: ''
    })
  }
  livesearch () {
    this.setState({
      inputplaceholder: 'search'
    })
  }
  goreturn () {
    this.props.history.go(-1)
  }
  render () {
    return (
      <div className="stratesearchbox">
        <div className="header">
          <div className="return iconfont iconfanhui" onClick={this.goreturn.bind(this)}></div>
          <div className="hotsearchbox">
              <div className="searchl ">
                <div className="iconfont iconsousuo2"></div>
                <input type="text" onClick={this.searchclick.bind(this)} onBlur={this.livesearch.bind(this)} placeholder={this.state.inputplaceholder}/>
              </div>
          </div>
            <div className="reset">取消</div>
        </div>
        <div className="searchcont">
          <div className="hotbox">
            {
              this.state.stratesearchlist.map((item,index)=>{
                return (
                  <div key={index} className={"search"+index}>
                  {item.search}
                </div>
                )
              })
            }
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