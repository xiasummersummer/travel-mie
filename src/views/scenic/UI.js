import React from 'react';
import '@/views/css/scenic.scss'

class Com extends React.Component {
  goback () {
    this.props.history.go(-1)
  }
  render() {
    console.log(this.props)
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
              <div className = "left">
                <img src = "http://www.paris-bride.com/uploadfile/2018/1217/20181217123625997.jpg" alt=""/>
                <p className = "scenictitle">大雁塔</p>
              </div>
              <div className = "left">
                <img src = "http://www.paris-bride.com/uploadfile/2018/1217/20181217123625997.jpg" alt=""/>
                <p className = "scenictitle">大雁塔</p>
              </div>
              <div className = "left">
                <img src = "http://www.paris-bride.com/uploadfile/2018/1217/20181217123625997.jpg" alt=""/>
                <p className = "scenictitle">大雁塔</p>
              </div>
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
          <div className = "one">
            <img src = "http://www.paris-bride.com/uploadfile/2018/1217/20181217100347899.jpg" alt=""/>
            <div className = "explain1">
              <div className = "explain1-box">
                <h4 className = "scienictitle">西安旅游 西安兵马俑博物馆门票 兵马俑门票兵马俑大门票秦始皇陵</h4>
                <span className = "ticket">16点前可预订今日票</span>
                <span className = "middle">|</span>
                <span className = "issue">平均一分钟出票</span>
              </div>
              <div className ="bottom1">
                <span className = "price">￥120</span>
                <span className = "qi">起</span>
                <div className="grae">5分</div>
                <span className = "good">好极了</span>
                <span className = "yue">月销3335笔</span>
              </div>
            </div>
          </div>
          <div className = "one">
            <img src = "http://www.paris-bride.com/uploadfile/2018/1217/20181217100347899.jpg" alt=""/>
            <div className = "explain1">
              <div className = "explain1-box">
                <h4 className = "scienictitle">西安旅游 西安兵马俑博物馆门票 兵马俑门票兵马俑大门票秦始皇陵</h4>
                <span className = "ticket">16点前可预订今日票</span>
                <span className = "middle">|</span>
                <span className = "issue">平均一分钟出票</span>
              </div>
              <div className ="bottom1">
                <span className = "price">￥120</span>
                <span className = "qi">起</span>
                <div className="grae">5分</div>
                <span className = "good">好极了</span>
                <span className = "yue">月销3335笔</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
  }
}
export default Com;