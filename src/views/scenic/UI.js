import React from 'react';
import '@/views/css/scenic.scss';


class Com extends React.Component {
  goback () {
    this.props.history.go(-1)
  }
  componentDidMount () {
    this.props.getSenselist();
  }
  goDetail (id) {
    this.props.history.push('/sensedetail/' + id)
  }
  render() {
    return (
      <div className = "bigbox">
        <header className = "header">
            <span className = "goback iconfont iconfanhuijiantou1" onClick= { this.goback.bind(this) }></span>
            <div className="search">
              <span className = "first iconfont iconsousuo1"></span>
              <input type="text" />
              <span className = "cancel">取消</span>
            </div>
        </header>
          <div className = "littlebox">
          <div>
            <div className ="content">
              {
                this.props.sensehotlist.map((item,index)=>{
                  return (
                    <div className = "left" key={index}>
                    <img src = {item.hotimg} alt=""/>
                    <p className = "scenictitle">{item.hotname}</p>
                  </div>
                  )
                })
              }
            </div>
            <div className = "nav">
              <div className = "nav-l">
                <span className = "text">全部景点</span>
                <span className = "nav-tu iconfont iconxiala"></span>
                {/* <select>
                  <option value="全部景点">全部景点</option>
                  <option value="大雁塔">大雁塔</option>
                  <option value="华清池">华清池</option>
                  <option value="华清池">华清池</option>
                </select> */}
              </div>
              <div className = "nav-l">
                <span className = "text">智能排序</span>
                <span className = "nav-tu iconfont iconxiala"></span>

                {/* <select>
                  <option value="智能排序">智能排序</option>
                  <option value="大雁塔">大雁塔</option>
                  <option value="华清池">华清池</option>
                  <option value="华清池">华清池</option>
                </select> */}
              </div>
              <div className = "nav-l">
              <span className = "text">筛选</span>
                <span className = "nav-tu iconfont iconxiala"></span>
                {/* <select>
                  <option value="筛选">筛选</option>
                  <option value="大雁塔">大雁塔</option>
                  <option value="华清池">华清池</option>
                  <option value="华清池">华清池</option>
                </select> */}
              </div>
            </div>
        <div className = "main">
          {
            this.props.senselist.map((item,index)=>{
              return (
                <div className = "one" key={index} onClick = { this.goDetail.bind(this,item.id) }>
            <img src = {item.itemimage} alt=""/>
            <div className = "explain1">
              <div className = "explain1-box">
                <h4 className = "scienictitle">{item.name}</h4>
                <span className = "ticket">{item.time}</span>
                <span className = "middle">|</span>
                <span className = "issue">平均一分钟出票</span>
              </div>
              <div className ="bottom1">
                <span className = "price">￥{item.price}</span>
                <span className = "qi">起</span>
                <div className="grae">5分</div>
                <span className = "good">{item.assess}</span>
                <span className = "yue">{item.salenum}</span>
              </div>
            </div>
          </div>
              )
            })
          }
        </div>
      </div>
    </div>
  </div>
    )
  }
}
export default Com;