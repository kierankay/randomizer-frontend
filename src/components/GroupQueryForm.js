import React, { useState } from 'react';

const GroupQueryForm = (props) => {
  const [limit, setLimit] = useState(5)
  const { getLastPairs, cohort } = props;

  function handleSubmit(evt) {
    evt.preventDefault();
    getLastPairs(limit, cohort)
  }

  return (
    <div className="col-6">
      <h3>Display previous project groups</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="limit">Number of past project groups to show below</label>
          <input type="number"
            className="form-control" name="limit" id="limit" aria-describedby="helpId" placeholder="" value={limit} onChange={evt => setLimit(evt.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Show Groups</button>
      </form>
    </div>
  )
}

export default GroupQueryForm;