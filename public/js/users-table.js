var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var UsersInfo = React.createClass({
  getInitialState: function() {
    return {
      users: '',
      count: '0'
    };
  },

  componentDidMount: function() {
    $.get(this.props.source, function(results) {
      var usersInfo = results;
      if (this.isMounted()) {
        this.setState({
          users: usersInfo.users,
          count: usersInfo.count
        });
      }
    }.bind(this));
  },

  numUserChange: function(event){
         this.setState({count: event.target.value});
  },

  render: function() {
  	if (!this.state.users) {
            return (
            	<div className="container90">
            		<p>Loading User Data...</p>
        		</div>
            );
    }


        var userRows = [];
        var requestedCount = parseInt(this.state.count);

        for (var i=0 ; i < requestedCount; ++i){
        	userRows.push(
                	<div className="row user-details">
                		<div className="two columns">{this.state.users[i].first_name}</div>
	    				<div className="two columns">{this.state.users[i].last_name}</div>
	    				<div className="two columns">{this.state.users[i].street}</div>
	    				<div className="two columns">{this.state.users[i].city}</div>
	    				<div className="two columns">{this.state.users[i].state}</div>
	    				<div className="two columns">{this.state.users[i].zip}</div>
                	</div>
                );
        }

        return (
        	<div>
        		<div className="row user-number-results">
        				<span className="num-results-text"> Number of results: </span>
			        	<select id="number-of-users" onChange={this.numUserChange} value={this.state.value}>
			        		<option value="100">100</option>
			        		<option value="75">75</option>
			        		<option value="50">50</option>
			        		<option value="25">25</option>
			        		<option value="10">10</option>
			        		<option value="5">5</option>
			      		</select>
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

// dont forget to point at production before deploying
React.render(
  <UsersInfo source="http://localhost:3000/users/" />,
  document.getElementById('user-content')
);
