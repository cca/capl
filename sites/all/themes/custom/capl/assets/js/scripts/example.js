var Project = React.createClass({

  render: function() {
    <div className='project'>
      <span>{this.props.title}</span>
    </div>

  }

});

var ProjectList = React.createClass({

  getInitialState: function() {
    return {
      dataVar1: ''
    };
  },

  componentDidMount: function() {
    $.get(this.props.projects, function(result) {
      if (this.isMounted()) {
        this.setState({
          dataVar1: result
        });

      }
    }.bind(this));
  },

  render: function() {
    
    console.log(this.state.dataVar1);

    return (
      <div>
        {this.state.dataVar1}
      </div>
    );
  }
});

React.render(
  <ProjectList projects="http://capl.local/nodes/projects" />,
  document.getElementById('content')
);
