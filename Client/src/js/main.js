var React = require('react');
var ReactDOM = require('react-dom');
var {hashHistory, Route, Router, IndexRoute} = require('react-router');
var UserData = require('./components/UserData');
var GetUsers = require('./components/GetUsers');
var NavBar = require('./components/NavBar');


var MainComp = React.createClass({
  render:function(){
    return(
      <div>
        <NavBar/>
        <br/><br/><br/><br/>
        {this.props.children}
      </div>
    );
  }
})

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={MainComp}>
      <IndexRoute component={UserData}/>
      <Route path="/user" component={UserData}/>
      <Route path="/download" component={GetUsers}/>
    </Route>
  </Router>,document.getElementById('app'));
