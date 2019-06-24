import { connect } from 'react-redux';
import UI from './UI';
// import api from '@/api';
import * as ajax  from '@/api'
import axios from 'axios'

const mapStateToProps = (state) =>({
  homebannerlist: state.home.homebannerlist,
  homeprolist: state.home.homeprolist,
  hometestdata: state.home.hometestdata
})
const mapDispatchToProps = (dispatch)=>{
 return {
  getBannerListData () {
    // api.requestGetData('client/v1/app/layoutamend?parameters=%7B%22version%22:%2210.0.0%22,%22source%22:%22H%22%7D').then(data =>{
    //   console.log(data)
    //   dispatch({
    //     type: 'changeHomebannerlist',
    //     data:data.data.carousel
    //   })
    // })
    ajax.getHomeBanner().then(res => {
      console.log(res.data)
      dispatch({
        type: 'changeHomebannerlist',
        data: res.data
      })
    })
  },
  // getProlistData () {
  //   ajax.getHomePro().then(res => {
  //     console.log(res.data)
  //     dispatch({
  //       type: 'changehometestProlist',
  //       data: res.data
  //     })
  //   })
  // },

 }
}
 const Com = connect(mapStateToProps, mapDispatchToProps)(UI);

 export default Com;
