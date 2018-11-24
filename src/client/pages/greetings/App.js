import React from 'react';

class App extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div>Hello world</div>
    )
  }
}


export default () =>  {
  return (
    <App />
  )
}