import { createStore, combineReducers } from 'redux';
import home from '@/views/home/store'
import food from '@/views/food/store'
import scenic from '@/views/scenic/store'

const reducer = combineReducers({
  home,
  food,
  scenic
})

const store = createStore(reducer)
export default store;