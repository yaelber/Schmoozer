import { combineReducers } from 'redux'
import contacts from './contacts'
import eventInfo from './eventInfo'

const schmoozer = combineReducers({
  contacts,
  eventInfo
})

export default schmoozer