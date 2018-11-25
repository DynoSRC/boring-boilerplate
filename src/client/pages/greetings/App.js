import React from 'react';
import { connect } from "react-redux";

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

const ConnectedApp = connect(mapStateToProps)(App);

export default ConnectedApp;