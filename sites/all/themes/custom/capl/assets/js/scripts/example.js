var UserGist = React.createClass({
  getInitialState: function() {
    return {
      title: ''
    };
  },

  getInitialState: function(){
    return {data: {title: []}};
  },

  componentDidMount: function() {
    $.get(this.props.source, function(result) {
      var lastGist = result[0];
      if (this.isMounted()) {
        this.setState({
          //title: lastGist.title
          data: result
        });
      }
    }.bind(this));
  },

  render: function() {
    return (
      <div>
      this.props.data.participants.map(function(player) {
   return <li key={player.title}>{player.title}</li>
})

        //{this.state.title} last gist is
      </div>
    );
  }
});

React.render(
  <UserGist source="http://localhost:8888/nodes/projects" />,
  document.getElementById('content')
);;
