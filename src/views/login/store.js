const reducer = (state = {IsLogin: ''}, action) => {
  const { type, data } = action;
  console.log(data)
  switch (type) {
    case 'changeIsLogin': return Object.assign({}, state, {IsLogin: data});
    default: return state;
  }
} 

export default reducer;