var ProjectImage = React.createClass({

  // render image using Drupal image style preset
  render: function() {
    // path to our image style
    var imageCacheUrl = 'sites/default/files/styles/project_key/public/project_image/';
    // get file name from original image url
    var fileName = this.props.image.split('/').pop();
    return <img src={imageCacheUrl + fileName} />
  }

});

var Project = React.createClass({

  render: function() {
    return (
      <li key={this.props.key}>
        <div className="imageWrapper">
          <ProjectImage image={this.props.data.field_project_image} />
          <div className="textOverlay">
            <span className="title">{this.props.data.title}</span>
            <span className="description">{this.props.data.body}</span>
          </div>
        </div>
      </li>
    )
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
      return <Project key={project.nid} data={project} />
    });

    return (
      <ul className="projectList">{projects}</ul>
    );
  }
});

React.render(
  <ProjectList projectsView="nodes/projects" />,
  document.getElementById('content')
);
