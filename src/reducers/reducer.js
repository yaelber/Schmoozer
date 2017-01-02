import { combineReducers } from 'redux'
import contacts from './contacts'

const schmoozer = combineReducers({
  contacts,
})

export default schmoozer