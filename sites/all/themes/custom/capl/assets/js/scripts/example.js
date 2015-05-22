var Project = React.createClass({

  render: function() {
    return <li key={this.props.key}>{this.props.title}</li>
  }
});

var ProjectList = React.createClass({

  getInitialState: function() {
    return {projects: []};
  },

  componentDidMount: function() {
    $.get(this.props.projectsView, function(data) {
      if (this.isMounted()) {
        this.setState({
          projects: data
        });

      }
    }.bind(this));
  },

  render: function() {

    var projects = this.state.projects.map(function(project) {
      return <Project key={project.nid} title={project.title} />
    });

    return (
      <ul>{projects}</ul>
    );
  }
});

React.render(
  <ProjectList projectsView="http://capl.local/nodes/projects" />,
  document.getElementById('content')
);
