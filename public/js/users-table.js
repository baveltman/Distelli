//include react animation support
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

/**
* Model for Users table component
*/
var UsersInfo = React.createClass({

  /**
  *	defines initial state of component
  */
  getInitialState: function() {
    return {
      users: '',
      initialCount: 0,
      count: 0,
      startIndex: 0,
      endIndex: 0
    };
  },

  /**
  * updates component state with async call to /users endpoint
  */
  componentDidMount: function() {
    $.get(this.props.source, function(results) {
      var usersInfo = results;
      if (this.isMounted()) {
        this.setState({
          users: usersInfo.users,
          initialCount: usersInfo.count,
          count: 5,
          startIndex: 0,
          endIndex: 5
        });
      }
    }.bind(this));
  },

  /**
  * updates component state after dropdown selection for max results per page
  */
  numUserChange: function(event){
  	if (this.state.startIndex + parseInt(event.target.value) <= this.state.initialCount){
  		//increase page results
         this.setState(
         		{
         			count: parseInt(event.target.value),
         			endIndex: this.state.startIndex + parseInt(event.target.value) 
         		});
     } else {
     	//show remaining results
     	this.setState(
         		{
         			count: parseInt(event.target.value),
         			endIndex: this.state.initialCount 
         		});
     }
  },

  /**
  * updates components state after click on back button
  */
  pageBack : function(event){
  	if (this.state.startIndex > 0){
  		//can page back

  		if (this.state.startIndex - this.state.count >= 0){
  			this.setState(
  			{
  				startIndex: this.state.startIndex - this.state.count,
  				endIndex: this.state.startIndex,
  			});
  		} else {
  			//show remianing results
  			this.setState(
  			{
  				startIndex: 0,
  				endIndex: this.state.startIndex
  			});
  		}
  	}
  },

  /**
  * updates component state after click on forward button
  */
  pageForward : function(event){
  	if (this.state.count == this.state.initialCount){
  		return;
  	}

  	if (this.state.endIndex <= this.state.initialCount){
  		//can page forward
  		if (this.state.endIndex + this.state.count <= this.state.initialCount){
	  		this.setState(
	  			{
	  				startIndex: this.state.endIndex,
	  				endIndex: this.state.endIndex + this.state.count,
	  			});
  		} else {
  			//show remaining results
  			this.setState(
	  			{
	  				startIndex: this.state.endIndex,
	  				endIndex: this.state.initialCount
	  			});
  		}
  	}
  },

  render: function() {

        var userRows = [];
        var requestedCount = parseInt(this.state.count);

        for (var i=this.state.startIndex ; i < this.state.endIndex; ++i){
        	userRows.push(
                	<div className="row user-details">
                		<div className="two columns user-info">{this.state.users[i].first_name}</div>
	    				<div className="two columns user-info">{this.state.users[i].last_name}</div>
	    				<div className="two columns user-info">{this.state.users[i].street}</div>
	    				<div className="two columns user-info">{this.state.users[i].city}</div>
	    				<div className="two columns user-info">{this.state.users[i].state}</div>
	    				<div className="two columns user-info">{this.state.users[i].zip}</div>
                	</div>
                );
        }

        return (
        	<div>
        		<div className="row user-number-results">
        			<div className="eight columns">
        				<span className="num-results-text">Max results Per Page: </span>
			        	<select id="number-of-users" onChange={this.numUserChange} value={this.state.value}>
			        		<option value="5">5</option>
			        		<option value="10">10</option>
			        		<option value="25">25</option>
			        		<option value="50">50</option>
			        		<option value="75">75</option>
			        		<option value="100">100</option>
			      		</select>
			      	</div>
			      	<div className="four columns">
			      		<div className="pager">
			      			<span className="pager-button" onClick={this.pageBack}> &lt; </span> 
			      			<span className="pager-button" onClick={this.pageForward}> &gt; </span>
		      				<span> {this.state.startIndex + 1} </span> - <span> {this.state.endIndex} </span> out of {this.state.initialCount}
			      		</div>
			      	</div>
		      	</div>

	        	<div className="users-table">
		        	<div className="row users-tabel-header">
		    				<div className="two columns">First Name</div>
		    				<div className="two columns">Last Name</div>
		    				<div className="two columns">Street</div>
		    				<div className="two columns">City</div>
		    				<div className="two columns">State</div>
		    				<div className="two columns">Zip</div>
		  			</div>
		  			<ReactCSSTransitionGroup transitionName="animate-user-row">
  						{userRows}
  					</ReactCSSTransitionGroup>
            	</div>
            </div>
        );
  	}
});

//display loader on page load, while async data is retrieved
React.render(
	  <div className="loader">Loading...</div>,
	  document.getElementById('user-content')
	);

setTimeout(function () {
	React.render(
	  <UsersInfo source="http://localhost:3000/users/" />,
	  document.getElementById('user-content')
	);
}, 1500);
