const reducer =(state={
  homebannerlist: [1,2,3],
  homeprolist: [],
  hometestdata: ['嘿嘿','呵呵','哈哈']
},action) =>{
  console.log(state)
  const {type,data} =action
  switch(type){
    case 'changeHomebannerlist':return Object.assign({}, state,{homebannerlist:data})
    case 'changeProlist': return Object.assign({},state,{homeprolist:data})
    default: return state;
  }
}

export default reducer;