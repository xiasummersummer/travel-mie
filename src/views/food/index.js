
import { connect } from 'react-redux';
import UI from './UI';
import * as ajax  from '@/api'

const  mapStateToprops = (state) => ({
  foodlist: state.food.foodlist
})

const mapDispatchToProps = (dispatch) => ({
    getFoodlist () {
      ajax.getFoodlist().then(res =>{
        dispatch({
          type: "changeFoodlist",
          data: res.data
        })
      })
    }
})


const Com = connect(mapStateToprops,mapDispatchToProps)(UI)

export default Com;

