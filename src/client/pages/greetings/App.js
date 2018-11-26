import React from 'react';
import { connect } from "react-redux";

@connect(mapStateToProps)
class App extends React.Component {

  render() {
    return (
      <div>{this.props.msg}</div>
    )
  }
}


function mapStateToProps(state) {
  return {
    msg: state.greetings.msg
  }
};


export default App;