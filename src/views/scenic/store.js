const reducer =(state={
  senselist: ['HH','JJ','LL'],
  sensehotlist:['AA','SS','QQ']
},action) =>{
  // console.log(state)
  const {type,data} =action
  switch(type){
    case 'changeSenselist':return Object.assign({}, state,{senselist:data})
    case 'changeSensehotlist':return Object.assign({}, state,{sensehotlist:data})
    default: return state;
  }
}

export default reducer;