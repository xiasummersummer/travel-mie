const reducer =(state={
  foodlist: [1,2,3]
},action) =>{
  const {type,data} =action
  switch(type){
    case 'changeFoodlist':return Object.assign({}, state,{foodlist:data})
    default: return state;
  }
}

export default reducer;