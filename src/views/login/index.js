import { connect } from 'react-redux';
import UI from './UI';
// import api from '@/api';

const mapStateToProps  = (state) => ({
  IsLogin:state.IsLogin
})

const mapDispatchToProps = (dispatch) => ({
    changeIsLogin (data) {
      dispatch({
        type: 'changeIsLogin',
        data: data
      })
    }
})

 const Com = connect(mapStateToProps,mapDispatchToProps)(UI);

 export default Com;
