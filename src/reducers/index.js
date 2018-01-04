import feeds from './feeds'
import nav from './navigation'
import { combineReducers } from 'redux'

const reducers = combineReducers({
  feeds,
  nav,
})

export default reducers
