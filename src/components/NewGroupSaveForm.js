import React from 'react';

class NewGroupSaveForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.handleSave(this.state.project)
  }

  render() {
    return (
      <div>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit} className="mb-1">
          <div className="form-group">
            <label htmlFor="project">Project Name</label>
            <input type="text" required
              className="form-control" name="project" id="project" aria-describedby="helpId" placeholder="" value={this.state.project} />
          </div>
          <button type="submit" className="btn btn-primary">Save Group</button>
        </form>
      </div>
    )
  }
}

export default NewGroupSaveForm;