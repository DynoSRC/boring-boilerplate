import { combineReducers } from 'redux'

function greetings(state = { msg: 'hello world'}, action) {

  return state;
}

export default combineReducers({
  greetings
})