import React from 'react';
import { connect } from "react-redux";
import isNode from 'detect-node';

/**
 * To load vanilla css into the application 
 * simply require a .css file and webpack will
 * put the put the CSS into the DOM on the fly
 * during development mode.  
 * 
 * On a production build boring uses the 
 * newer(ish) MiniCssExtractPlugin to cut the 
 * css out of the JavaScript file and serve as
 * a minified css file that is concatenated
 * with all the other css required throghout 
 * the page.  Prod builds will have no FOUT 
 * as this CSS file is a sync call at the 
 * bottom of the <head> tag.  
 * 
 * Note the use of the isNode check.  We do
 * this because node will literally try to 
 * require and parse css which will blow up 
 * the V8 JS parser.  
 */
if (!isNode) {
  require('./greeting.css');
}

@connect(mapStateToProps)
class App extends React.Component {

  render() {
    return (
      <div>{this.props.msg}!</div>
    )
  }
}


function mapStateToProps(state) {
  return {
    msg: state.greetings.msg
  }
};


export default App;