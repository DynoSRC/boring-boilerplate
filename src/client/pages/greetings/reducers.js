import { combineReducers } from 'redux'

function greeting(state = { mes: 'hello world'}, action) {

  return state;
}

export default combineReducers({
  greeting
})