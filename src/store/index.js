import { createStore, combineReducers } from 'redux';
import home from '@/views/home/store'
import food from '@/views/food/store'

const reducer = combineReducers({
  home,
  food
})

const store = createStore(reducer)
export default store;