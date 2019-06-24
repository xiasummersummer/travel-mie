import React from 'react';
import { SearchBar } from 'antd-mobile';
import '@/views/css/scenic.scss'

class Com extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className = "bigbox">
        <header className = "header">
            <span className = "goback iconfont iconfanhuijiantou1"></span>
            <SearchBar placeholder="Search" style = {{ width:'80%'}} />
        </header>
          <div className = "littlebox">
          <div>
            <div className ="content">
              <div className = "left">
                <img src = "http://www.paris-bride.com/uploadfile/2018/1217/20181217123625997.jpg" alt=""/>
                <p>大雁塔</p>
              </div>
              <div className = "left">
                <img src = "http://www.paris-bride.com/uploadfile/2018/1217/20181217123625997.jpg" alt=""/>
                <p>大雁塔</p>
              </div>
              <div className = "left">
                <img src = "http://www.paris-bride.com/uploadfile/2018/1217/20181217123625997.jpg" alt=""/>
                <p>大雁塔</p>
              </div>
            </div>
            <div className = "nav">
              <div className = "nav-l">
                <select>
                  <option value="全部景点">全部景点</option>
                  <option value="大雁塔">大雁塔</option>
                  <option value="华清池">华清池</option>
                  <option value="华清池">华清池</option>
                </select>
              </div>
              <div className = "nav-l">
                <select>
                  <option value="智能排序">智能排序</option>
                  <option value="大雁塔">大雁塔</option>
                  <option value="华清池">华清池</option>
                  <option value="华清池">华清池</option>
                </select>
              </div>
              <div className = "nav-l">
                <select>
                  <option value="筛选">筛选</option>
                  <option value="大雁塔">大雁塔</option>
                  <option value="华清池">华清池</option>
                  <option value="华清池">华清池</option>
                </select>
              </div>
            </div>
            <div className = "main">
          <div className = "one">
            <div className = "img">
              <img src = "http://www.paris-bride.com/uploadfile/2018/1217/20181217100347899.jpg" alt=""/>
            </div>
            <div className = "explain">
              <h5>华清池</h5>
              <span>￥120</span>
              <h6>推荐指数</h6>
              <p>距离你416m 西安市华清池附近的得减肥看电视</p>
            </div>
          </div>
          <div className = "one">
            <div className = "img">
              <img src = "http://www.paris-bride.com/uploadfile/2018/1217/20181217100347899.jpg" alt=""/>
            </div>
            <div className = "explain">
              <h5>华清池</h5>
              <span>￥120</span>
              <h6>推荐指数</h6>
              <p>距离你416m 西安市华清池附近的得减肥看电视</p>
            </div>
          </div>
          <div className = "one">
            <div className = "img">
              <img src = "http://www.paris-bride.com/uploadfile/2018/1217/20181217100347899.jpg" alt=""/>
            </div>
            <div className = "explain">
              <h5>华清池</h5>
              <span>￥120</span>
              <h6>推荐指数</h6>
              <p>距离你416m 西安市华清池附近的得减肥看电视</p>
            </div>
          </div>
          <div className = "one">
            <div className = "img">
              <img src = "http://www.paris-bride.com/uploadfile/2018/1217/20181217100347899.jpg" alt=""/>
            </div>
            <div className = "explain">
              <h5>华清池</h5>
              <span>￥120</span>
              <h6>推荐指数</h6>
              <p>距离你416m 西安市华清池附近的得减肥看电视</p>
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