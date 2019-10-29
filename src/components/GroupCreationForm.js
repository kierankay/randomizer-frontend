import React, { useState } from 'react';

const GroupQueryForm = props => {
  const [minDistance, setMinDistance] = useState(1);
  const { processSubmit } = props;

  function handleSubmit(evt) {
    evt.preventDefault();
    processSubmit(minDistance);
  }

  return (
    <div className="col-6">
      <h3>Generate a randomized group</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="minDistance">Minimum distance to last pairing</label>
          <input type="number"
            className="form-control" name="minDistance" id="minDistance" aria-describedby="helpId" placeholder="" value={minDistance} onChange={evt => setMinDistance(evt.target.value)}/>
          <small id="helpId" className="form-text text-muted">Defaults to cohort size - 1 if input >= cohort size</small>
        </div>
        <button type="submit" className="btn btn-primary">Generate Group</button>
      </form>
    </div>
  )
}

export default GroupQueryForm;