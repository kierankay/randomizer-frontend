import React, { useState } from 'react';

const NewGroupSaveForm = (props) => {
  const [project, setProject] = useState('');
  const { handleSave } = props;

  function handleSubmit(evt) {
    evt.preventDefault();
    handleSave(project);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-1">
        <div className="form-group">
          <label htmlFor="project">Project Name</label>
          <input
            type="text"
            required
            className="form-control"
            name="project"
            id="project"
            aria-describedby="helpId"
            placeholder=""
            value={project}
            onChange={(evt) => setProject(evt.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Save Group</button>
      </form>
    </div>
  );
};

export default NewGroupSaveForm;
