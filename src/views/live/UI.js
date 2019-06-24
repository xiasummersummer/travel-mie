import React from 'react';
// import Homebanner from '@/components/homebox/Homebanner'

class Com extends React.Component {
  // componentDidMount () {
  //   fetch('api/getModels?type=1').then(res=>res.json()).then(data =>{
  //     console.log(data)
  //   })
  // }
  render(){
    console.log(this.props)
    return (
      <div className="box">
        直播
        {/* <Homebanner homebannerlist = {this.props.homebannerlist}/> */}
      </div>
    )
  }
}
export default Com;