import { combineReducers } from 'redux'

function greetings(state = { msg: 'hello world'}, action) {

  return state;
}

// just export an object.  
// boring will combine everything 
// for you, as well as add a `router` 
// reducer for you to connect react-roouter
// and redux. 
export default {
  greetings
}