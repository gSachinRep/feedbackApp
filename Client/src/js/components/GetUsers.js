var React = require('react');
var GetUsersList =  require('./GetUsersList');

var GetUsers = React.createClass({
getInitialState:function()
{
  return{allUsers:[]}
},
componentWillMount:function()
{
  this.getUsers();
},
getUsers: function()
{
  console.log("getting data");
  $.ajax({
    url:"http://localhost:8080/user",
    type: 'GET',
    datatype: 'JSON',
    success: function(res)
    {
      this.setState({allUsers:res.response});
      console.log(res);
    }.bind(this),
    error: function(err)
    {
      console.log(err.response);
    }.bind(this)
  });
},
  render:function()
  {
      return(
        <div className="GetUsers">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <GetUsersList allData={this.state.allUsers}/>
              </div>
            </div>
          </div>
        </div>
      );
  }
  });

module.exports = GetUsers;
