const reducer =(state={
  homebannerlist: [1,2,3],
  sensedetail: ''
},action) =>{
  const {type,data} =action
  switch(type){
    case 'changeBannerlist':return Object.assign({}, state,{homebannerlist:data});
    case 'changeSensedetail':return Object.assign({}, state,{sensedetail:data})
    default: return state;
  }
}

export default reducer;