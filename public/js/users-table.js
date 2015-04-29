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

  render: function() {
    return (
      <div>
        {this.state.users}
      </div>
    );
  }
});

React.render(
  <UsersInfo source="https://distelli-baveltman.rhcloud.com/users" />,
  mountNode
);
