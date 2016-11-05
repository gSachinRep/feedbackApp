var React = require('react');

var UserData = React.createClass({
getInitialState:function()
{
  return{participantName:'',participantCode:'',orgName:'',progType:''}
},
handleParticipantNameChange:function(e)
{
  this.setState({participantName:e.target.value});
},
handleParticipantCodeChange:function(e)
{
  this.setState({participantCode:e.target.value});
},
handleOrgName:function(e)
{
  this.setState({orgName:e.target.value});
  console.log("Hello ",this.state.orgName, optionState);
},
handleProgType:function(e)
{
  this.setState({progType:e.target.value});
  console.log(this.state.progType);
},
saveParticipant: function()
{
  if(this.state.participantName === '' || this.state.participantCode === '' || this.state.orgName === '' || this.state.progType === '')
  {
    alert("Please Fill all fields");
  }
  else
  {
    $.ajax({
      url:"http://localhost:8080/user",
      type: 'POST',
      datatype: 'JSON',
      data:this.state,
      success: function(res)
      {
        alert(res.response);
      }.bind(this),
      error: function(err)
      {
        console.log(err.response);
      }.bind(this)
    });
  }
},
  render:function()
  {
      return(
        <div className="UserData">
        <div className="container">
          <div className="container-fluid">
          	<div className="row">
          		<div className="col-md-12">
          				<div className="form-group">
          					<label>
          						Participant Name
          					</label>
          					<input type="text" className="form-control" id="participantName" onChange={this.handleParticipantNameChange} />
          				</div>
          				<div className="form-group">
          					<label>
          						Participant Code
          					</label>
          					<input type="text" className="form-control" id="participantCode" onChange={this.handleParticipantCodeChange}/>
          				</div>
                  <div className="form-group">
          					<label>
          						Organization
          					</label>
                    <select className="form-control" option={optionState} onSelect={this.handleOrgName}>
                      <option value="wipro">Wipro Digital</option>
                      <option value="cts">Cognizant</option>
                      <option value="ntl">NIIT Technologies</option>
                    </select>
                </div>
                  <div className="form-group">
          					<label>
          						Program Type
          					</label>
          					<select className="form-control" onChange={this.handleProgType}>
                      <option value="immersive">Immersive</option>
                      <option value="hyrbid">Hybrid</option>
                    </select>
                  </div>
          				<button onClick={this.saveParticipant} className="btn btn-primary">
          					Save
          				</button>
          		</div>
          	</div>
          </div>
        </div>
        </div>
      );
  }
  });

module.exports = UserData;
