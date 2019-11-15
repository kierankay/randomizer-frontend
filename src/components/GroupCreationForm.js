import React, { useState } from 'react';

const GroupQueryForm = props => {
  const [minDistance, setMinDistance] = useState(0);
  const { createNewGroup, currentCohortStudents } = props;
  const cohortSize = currentCohortStudents.length;

  function handleSubmit(evt) {
    evt.preventDefault();
    createNewGroup(minDistance);
  }

  return (
    <div className="col-6">
      <h3>Generate a randomized group</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="minDistance">Minimum distance to last pairing</label>
          <input type="number" min="0" max={cohortSize - 1}
            className="form-control" name="minDistance" id="minDistance" aria-describedby="helpId" placeholder="" value={minDistance} onChange={evt => setMinDistance(evt.target.value)} />
          </div>
        <button type="submit" className="btn btn-primary">Generate Group</button>
      </form>
    </div>
  )
}

export default GroupQueryForm;