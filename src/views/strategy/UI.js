import React from 'react';
// import Homebanner from '@/components/homebox/Homebanner'
import '@/views/css/strategy.scss'
import Offical from '@/components/strategybox/Official.js'
import People from '@/components/strategybox/People.js'
class Com extends React.Component {
  constructor(props){
    super(props)
    this.state = ({
      officalstrage: 1
    })
  }
  offical () {
    this.setState({
      officalstrage: 1
    })
  }
  people () {
    this.setState({
      officalstrage: 2
    })
  }
  // componentDidMount () {
  //   this.props.getBannerListData()
  // }

  render(){
    // console.log(this.props)
    return (
      <div className="strategybox">
        <div className="searchbox">
          <div className="iconfont iconsousuo2 search"></div>
          <div className="inputbox"><span>Search</span></div>
        </div>
        <div className="strategynav">
          <div className="navl active" onClick={this.offical.bind(this)}>
            官方攻略
          </div>
          <div className="navr" onClick={this.people.bind(this)}>
            游友攻略
          </div>
        </div>
        {this.state.officalstrage===1?<Offical /> : <People />}
      </div>
    )
  }
}
export default Com;