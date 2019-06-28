import { connect } from 'react-redux';
import UI from './UI';
import * as ajax  from '@/api'
const  mapStateToprops = (state) => ({
  senselist: state.scenic.senselist,
  sensehotlist:state.scenic.sensehotlist
})
const mapDispatchToProps = (dispatch) => ({
  getSenselist () {
    ajax.getSenselist().then(res =>{
      console.log(res.data)
      dispatch({
        type: "changeSenselist",
        data: res.data
      })
    })
    ajax.getSensehotlist().then(res =>{
      dispatch({
        type: "changeSensehotlist",
        data: res.data
      })
    })
    // ajax.getSenseDetail().then(res =>{
    //   dispatch({
    //     type: "changeSensehotlist",
    //     data: res.data
    //   })
    // })
  }
})

 const Com = connect(mapStateToprops,mapDispatchToProps)(UI);

 export default Com;
