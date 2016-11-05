var React = require('react');
var {Link} = require('react-router');

var NavBar = React.createClass({

render:function()
{
  return(
    <div className="container-fluid">
    	<div className="row">
    		<div className="col-md-12">
    			<nav className="navbar navbar-default navbar-inverse navbar-fixed-top" role="navigation">
    				<div className="navbar-header">

    					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
    						 <span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
    					</button> <a className="navbar-brand" href="#">Performance Report Generator</a>
    				</div>

    				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    					<ul className="nav navbar-nav">
              <li><Link to="/user">Insert New Participant</Link></li>
              <li><Link to="/download">Fill Performance and Download Report</Link></li>
    					</ul>
    				</div>
    			</nav>
    		</div>
    	</div>
    </div>
  );
}
});

module.exports=NavBar;
