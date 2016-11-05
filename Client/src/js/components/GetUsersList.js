var React = require('react');
var AllUsers = require('./AllUsers');

var GetUsersList = React.createClass({
  render:function()
  {
    var allUsersRow = this.props.allData.map(function(users) {
              return (
                  <AllUsers
                      allUsersData={users}
                      key={users._id}
                    >
                  </AllUsers>
              );
          }.bind(this));
      return(
        <div className="GetUsersList">
        {allUsersRow}
        </div>
      );
  }
  });

module.exports = GetUsersList;
