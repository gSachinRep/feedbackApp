var React = require('react');

var FeedbackModal = React.createClass({
getInitialState: function()
{
  return({empId:this.props.userId,pq1:'1. Clarity in Understanding of concepts on the technical areas covered', pq2:'2. Application of concepts (UI, Client side, Middleware, Server side, Storage)', pq3:'3. Quality of code (Readability, Maintainability, Robustness,...)', pq4:'4. Problem solving ability (think, evaluate and choose among alternates, debugging / troubleshooting skills and innovation/creativity)',eq1:'1. Compliance to development cycle (code check in, adherence to S&G,...)',eq2:'2. Timeliness (meeting Assignment timeline)',eq3:'3. Quality of deliverable (as per requirements with good UX)',eq4:'4. Attitude – Interest, inclination and involvement thru the program',eq5:'5. Punctuality and attendance',oq1:'1. On program completion and all above parameter',fq1:'Areas participant has done well',fq2:'Areas of improvement', pa1:'',pa2:'', pa3:'',pa4:'', ea1:'',ea2:'', ea3:'',ea4:'',ea5:'', oa1:'',fa1:'',fa2:''});
},
handlePA1: function(e)
{
  console.log("PA1"+e.target.value);
  this.setState({pa1:e.target.value});
},
handlePA2: function(e)
{
  console.log("PA2"+e.target.value);
  this.setState({pa2:e.target.value});
},
handlePA3: function(e)
{
  console.log("PA3"+e.target.value);
  this.setState({pa3:e.target.value});
},
handlePA4: function(e)
{
  console.log("PA4"+e.target.value);
  this.setState({pa4:e.target.value});
},
handleEA1: function(e)
{
  console.log("EA1"+e.target.value);
  this.setState({ea1:e.target.value});
},
handleEA2: function(e)
{
  console.log("EA2"+e.target.value);
  this.setState({ea2:e.target.value});
},
handleEA3: function(e)
{
  console.log("EA3"+e.target.value);
  this.setState({ea3:e.target.value});
},
handleEA4: function(e)
{
  console.log("EA4"+e.target.value);
  this.setState({ea4:e.target.value});
},
handleEA5: function(e)
{
  console.log("EA5"+e.target.value);
  this.setState({ea5:e.target.value});
},
handleOA1: function(e)
{
  console.log("OA1"+e.target.value);
  this.setState({oa1:e.target.value});
},
handleFA1: function(e)
{
  console.log("FA1"+e.target.value);
  this.setState({fa1:e.target.value});
},
handleFA2: function(e)
{
  console.log("FA2"+e.target.value);
  this.setState({fa2:e.target.value});
},
insertFeedback: function()
{
  if(this.state.pa1 === '' || this.state.pa2 === '' ||  this.state.pa3 === '' || this.state.pa4 === '' || this.state.ea1 === '' || this.state.ea2 === '' ||  this.state.ea3 === '' || this.state.ea4 === '' || this.state.ea5 === '' || this.state.oa1 === '' || this.state.fa1 === '' || this.state.fa2 === '')
  {
  alert("Please fill all the fields for feedback form");
  }
  else
  {
  $.ajax({
    url:"http://localhost:8080/grades",
    type: 'POST',
    datatype: 'JSON',
    data:this.state,
    success: function(res)
    {
      console.log(res.response);
      alert(res.response);
    }.bind(this),
    error: function(err)
    {
      console.log(err.response);
    }.bind(this)
  });
  this.closeModal();
  $('#feedbackModal').modal('hide');
    return false;

}
},
closeModal: function(){
  this.props.handleHideModal();
},
render: function()
{
  return(

    <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="feedbackModal" className="modal fade" >
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <button aria-hidden="true" data-dismiss="modal" onClick={this.closeModal} className="close" type="button">x</button>
                    <h4 className="modal-title">Feedback form for {this.props.empName}</h4>
                </div>
                <div className="modal-body">
                        <div className="form-group">
                            <label className="col-lg-12 control-label"><h4>Programming</h4></label>
                            <label className="col-lg-12 control-label">{this.state.pq1}</label>
                            <div className="col-lg-12">
                                 <form role="form">
                                   <label className="radio-inline">
                                   <input name="radioGroup" id="pa1radio1" onClick={this.handlePA1} value="Basic" type="radio"/>Basic
                                   </label>
                                   <label className="radio-inline">
                                   <input name="radioGroup" id="pa1radio2" onClick={this.handlePA1} value="Average" type="radio"/>Average
                                   </label>
                                   <label className="radio-inline">
                                   <input name="radioGroup" id="pa1radio3" onClick={this.handlePA1} value="Above Average" type="radio"/>Above Average
                                   </label>
                                   <label className="radio-inline">
                                   <input name="radioGroup" id="pa1radio4" onClick={this.handlePA1} value="Good" type="radio"/>Good
                                   </label>
                                   <label className="radio-inline">
                                   <input name="radioGroup" id="pa1radio5" onClick={this.handlePA1} value="Top Gun" type="radio"/>Top Gun
                                   </label>
                              </form>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-lg-12 control-label">{this.state.pq2}</label>
                            <div className="col-lg-12">
                                <form role="form">
                                  <label className="radio-inline">
                                  <input name="radioGroup" id="pa2radio1" onClick={this.handlePA2} value="Basic" type="radio"/>Basic
                                  </label>
                                  <label className="radio-inline">
                                  <input name="radioGroup" id="pa2radio2" onClick={this.handlePA2} value="Average" type="radio"/>Average
                                  </label>
                                  <label className="radio-inline">
                                  <input name="radioGroup" id="pa2radio3" onClick={this.handlePA2} value="Above Average" type="radio"/>Above Average
                                  </label>
                                  <label className="radio-inline">
                                  <input name="radioGroup" id="pa2radio4" onClick={this.handlePA2} value="Good" type="radio"/>Good
                                  </label>
                                  <label className="radio-inline">
                                  <input name="radioGroup" id="pa2radio5" onClick={this.handlePA2} value="Top Gun" type="radio"/>Top Gun
                                  </label>
                                </form>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-lg-12 control-label">{this.state.pq3}</label>
                            <div className="col-lg-12">
                                 <form role="form">
                                   <label className="radio-inline">
                                   <input name="radioGroup" id="pa3radio1" onClick={this.handlePA3} value="Basic" type="radio"/>Basic
                                   </label>
                                   <label className="radio-inline">
                                   <input name="radioGroup" id="pa3radio2" onClick={this.handlePA3} value="Average" type="radio"/>Average
                                   </label>
                                   <label className="radio-inline">
                                   <input name="radioGroup" id="pa3radio3" onClick={this.handlePA3} value="Above Average" type="radio"/>Above Average
                                   </label>
                                   <label className="radio-inline">
                                   <input name="radioGroup" id="pa3radio4" onClick={this.handlePA3} value="Good" type="radio"/>Good
                                   </label>
                                   <label className="radio-inline">
                                   <input name="radioGroup" id="pa3radio5" onClick={this.handlePA3} value="Top Gun" type="radio"/>Top Gun
                                   </label>
                                 </form>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-lg-12 control-label">{this.state.pq4}</label>
                            <div className="col-lg-12">
                                 <form role="form">
                                   <label className="radio-inline">
                                   <input name="radioGroup" id="pa4radio1" onClick={this.handlePA4} value="Basic" type="radio"/>Basic
                                   </label>
                                   <label className="radio-inline">
                                   <input name="radioGroup" id="pa4radio2" onClick={this.handlePA4} value="Average" type="radio"/>Average
                                   </label>
                                   <label className="radio-inline">
                                   <input name="radioGroup" id="pa4radio3" onClick={this.handlePA4} value="Above Average" type="radio"/>Above Average
                                   </label>
                                   <label className="radio-inline">
                                   <input name="radioGroup" id="pa4radio4" onClick={this.handlePA4} value="Good" type="radio"/>Good
                                   </label>
                                   <label className="radio-inline">
                                   <input name="radioGroup" id="pa4radio5" onClick={this.handlePA4} value="Top Gun" type="radio"/>Top Gun
                                   </label>
                                 </form>
                            </div>
                        </div>

                        <div className="form-group">
                              <label className="col-lg-12 control-label"><h4>Engineering culture</h4></label>
                              <label className="col-lg-12 control-label">{this.state.eq1}</label>
                              <div className="col-lg-12">
                                  <form role="form">
                                     <label className="radio-inline">
                                     <input name="radioGroup" id="ea1radio1" onClick={this.handleEA1} value="Basic" type="radio"/>Basic
                                     </label>
                                     <label className="radio-inline">
                                     <input name="radioGroup" id="ea1radio2" onClick={this.handleEA1} value="Average" type="radio"/>Average
                                     </label>
                                     <label className="radio-inline">
                                     <input name="radioGroup" id="ea1radio3" onClick={this.handleEA1} value="Above Average" type="radio"/>Above Average
                                     </label>
                                     <label className="radio-inline">
                                     <input name="radioGroup" id="ea1radio4" onClick={this.handleEA1} value="Good" type="radio"/>Good
                                     </label>
                                     <label className="radio-inline">
                                     <input name="radioGroup" id="ea1radio5" onClick={this.handleEA1} value="Top Gun" type="radio"/>Top Gun
                                     </label>
                                  </form>
                              </div>
                          </div>
                          <div className="form-group">
                              <label className="col-lg-12 control-label">{this.state.eq2}</label>
                              <div className="col-lg-12">
                                  <form role="form">
                                    <label className="radio-inline">
                                    <input name="radioGroup" id="ea2radio1" onClick={this.handleEA2} value="Basic" type="radio"/>Basic
                                    </label>
                                    <label className="radio-inline">
                                    <input name="radioGroup" id="ea2radio2" onClick={this.handleEA2} value="Average" type="radio"/>Average
                                    </label>
                                    <label className="radio-inline">
                                    <input name="radioGroup" id="ea2radio3" onClick={this.handleEA2} value="Above Average" type="radio"/>Above Average
                                    </label>
                                    <label className="radio-inline">
                                    <input name="radioGroup" id="ea2radio4" onClick={this.handleEA2} value="Good" type="radio"/>Good
                                    </label>
                                    <label className="radio-inline">
                                    <input name="radioGroup" id="ea2radio5" onClick={this.handleEA2} value="Top Gun" type="radio"/>Top Gun
                                    </label>
                                  </form>
                              </div>
                          </div>
                          <div className="form-group">
                              <label className="col-lg-12 control-label">{this.state.eq3}</label>
                              <div className="col-lg-12">
                                   <form role="form">
                                     <label className="radio-inline">
                                     <input name="radioGroup" id="ea3radio1" onClick={this.handleEA3} value="Basic" type="radio"/>Basic
                                     </label>
                                     <label className="radio-inline">
                                     <input name="radioGroup" id="ea3radio2" onClick={this.handleEA3} value="Average" type="radio"/>Average
                                     </label>
                                     <label className="radio-inline">
                                     <input name="radioGroup" id="ea3radio3" onClick={this.handleEA3} value="Above Average" type="radio"/>Above Average
                                     </label>
                                     <label className="radio-inline">
                                     <input name="radioGroup" id="ea3radio4" onClick={this.handleEA3} value="Good" type="radio"/>Good
                                     </label>
                                     <label className="radio-inline">
                                     <input name="radioGroup" id="ea3radio5" onClick={this.handleEA3} value="Top Gun" type="radio"/>Top Gun
                                     </label>
                                   </form>
                              </div>
                          </div>
                          <div className="form-group">
                              <label className="col-lg-12 control-label">{this.state.eq4}</label>
                              <div className="col-lg-12">
                                  <form role="form">
                                    <label className="radio-inline">
                                    <input name="radioGroup" id="ea4radio1" onClick={this.handleEA4} value="Basic" type="radio"/>Basic
                                    </label>
                                    <label className="radio-inline">
                                    <input name="radioGroup" id="ea4radio2" onClick={this.handleEA4} value="Average" type="radio"/>Average
                                    </label>
                                    <label className="radio-inline">
                                    <input name="radioGroup" id="ea4radio3" onClick={this.handleEA4} value="Above Average" type="radio"/>Above Average
                                    </label>
                                    <label className="radio-inline">
                                    <input name="radioGroup" id="ea4radio4" onClick={this.handleEA4} value="Good" type="radio"/>Good
                                    </label>
                                    <label className="radio-inline">
                                    <input name="radioGroup" id="ea4radio5" onClick={this.handleEA4} value="Top Gun" type="radio"/>Top Gun
                                    </label>
                                  </form>
                              </div>
                          </div>
                          <div className="form-group">
                              <label className="col-lg-12 control-label">{this.state.eq5}</label>
                              <div className="col-lg-12">
                                   <form role="form">
                                     <label className="radio-inline">
                                     <input name="radioGroup" id="ea5radio1" onClick={this.handleEA5} value="Basic" type="radio"/>Basic
                                     </label>
                                     <label className="radio-inline">
                                     <input name="radioGroup" id="ea5radio2" onClick={this.handleEA5} value="Average" type="radio"/>Average
                                     </label>
                                     <label className="radio-inline">
                                     <input name="radioGroup" id="ea5radio3" onClick={this.handleEA5} value="Above Average" type="radio"/>Above Average
                                     </label>
                                     <label className="radio-inline">
                                     <input name="radioGroup" id="ea5radio4" onClick={this.handleEA5} value="Good" type="radio"/>Good
                                     </label>
                                     <label className="radio-inline">
                                     <input name="radioGroup" id="ea5radio5" onClick={this.handleEA5} value="Top Gun" type="radio"/>Top Gun
                                     </label>
                                   </form>
                              </div>
                          </div>
                          <div className="form-group">
                                <label className="col-lg-12 control-label"><h4>Overall Cadet Performance</h4></label>
                                <label className="col-lg-12 control-label">{this.state.oq1}</label>
                                <div className="col-lg-12">
                                     <form role="form">
                                       <label className="radio-inline">
                                       <input name="radioGroup" id="oa1radio1" onClick={this.handleOA1} value="Basic" type="radio"/>Basic
                                       </label>
                                       <label className="radio-inline">
                                       <input name="radioGroup" id="oa1radio2" onClick={this.handleOA1} value="Average" type="radio"/>Average
                                       </label>
                                       <label className="radio-inline">
                                       <input name="radioGroup" id="oa1radio3" onClick={this.handleOA1} value="Above Average" type="radio"/>Above Average
                                       </label>
                                       <label className="radio-inline">
                                       <input name="radioGroup" id="oa1radio4" onClick={this.handleOA1} value="Good" type="radio"/>Good
                                       </label>
                                       <label className="radio-inline">
                                       <input name="radioGroup" id="oa1radio5" onClick={this.handleOA1} value="Top Gun" type="radio"/>Top Gun
                                       </label>
                                     </form>
                                </div>
                           </div>
                           <div className="form-group">
                             <label className="col-lg-12 control-label">{this.state.fq1}</label>
                             <div className="col-lg-12">
                             <textarea rows="10" cols="30" onChange={this.handleFA1} className="form-control" id="fq1"  required></textarea>
                             </div>
                           </div>
                           <div className="form-group">
                            <label className="col-lg-12 control-label">{this.state.fq2}</label>
                            <div className="col-lg-12">
                            <textarea rows="10" cols="30" onChange={this.handleFA2} className="form-control" id="fq2"  required></textarea>
                            </div>
                          </div>
                </div>
                <div className="modal-footer">
                    <div className="col-lg-offset-2 col-lg-10">
                        <button className="btn btn-primary" onClick={this.insertFeedback} type="submit" >Send</button>
                        <button className="btn btn-default" type="button" onClick={this.closeModal} data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}});

module.exports= FeedbackModal;
