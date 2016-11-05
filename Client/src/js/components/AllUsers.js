var React = require('react');
var FeedbackModal = require('./FeedbackModal');

var AllUsers = React.createClass({
  downloadDoc: function()
  {
    $.ajax({
      url:"http://localhost:8080/download/"+this.props.allUsersData._id,
      type: 'GET',
      datatype: 'JSON',
      success: function(res)
      {
        alert(res.response);
        console.log(res.response);
      }.bind(this),
      error: function(err)
      {
        console.log(err.response);
      }.bind(this)
    });
  },
  getInitialState()
  {
    return {showModal: false};
  },
  handleHideModal()
  {
    this.setState({showModal: false});
  },
  handleShowModal()
  {
    this.setState({showModal: true});
  },
  render:function()
  {
      return(
        <div className="AllUsers">
          <table className="table">
            <tbody>
              <tr className="row">
              <td className="col-md-2">{this.props.allUsersData.empName}</td>
              <td className="col-md-2">{this.props.allUsersData.empCode}</td>
              <td className="col-md-2">{this.props.allUsersData.orgName}</td>
              <td className="col-md-2">{this.props.allUsersData.progType}</td>
              <td className="col-md-2">
              <a href="#feedbackModal" className="btn btn-primary" onMouseDown={this.handleShowModal}  data-toggle="modal">Feedback</a>
              </td>
              <td className="col-md-2">
              <a onClick={this.downloadDoc} className="btn btn-primary" >Download</a>
              </td>
              </tr>
            </tbody>
          </table>
          {this.state.showModal ? <FeedbackModal userId={this.props.allUsersData._id} empName={this.props.allUsersData.empName} empCode={this.props.allUsersData.empCode} handleHideModal={this.handleHideModal} userId={this.props.allUsersData._id}/> : null}
        </div>
      );
  }
  });

module.exports = AllUsers;
