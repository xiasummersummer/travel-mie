import { connect } from 'react-redux';
import UI from './UI';
// import api from '@/api';

const mapStateToProps = (state) =>({
  homebannerlist: state.home.homebannerlist
})
const mapDispatchToProps = (dispatch)=>{
 return {
  getBannerListData () {
    // api.requestGetData('banner').then(data =>{
    //   console.log(data)
    //   dispatch({
    //     type: 'changeBannerlist',
    //     data
    //   })
    // })
  }
 }
}
 const Com = connect(mapStateToProps, mapDispatchToProps)(UI);

 export default Com;
