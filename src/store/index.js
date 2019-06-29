import { createStore, combineReducers } from 'redux';
import home from '@/views/home/store'
import food from '@/views/food/store'
import scenic from '@/views/scenic/store'
import login from '@/views/login/store'


const reducer = combineReducers({
  home,
  food,
  scenic,
  login
})

const store = createStore(reducer)
export default store;