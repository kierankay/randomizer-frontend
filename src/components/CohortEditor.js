import React, { useState } from 'react';

const CohortEditor = (props) => {
  const [cohort, setCohort] = useState('');
  const [add, setAdd] = useState(false);

  async function handleSubmit(evt) {
    evt.preventDefault()
    await props.addCohortToApi(cohort);
    setCohort('');
    setAdd(false);
  }

  function toggleAdd() {
    setAdd(!add)
  }

  return (
    <React.Fragment>
      {add ?
        <React.Fragment>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="cohort">New cohort name</label>
              <input type="text"
                className="form-control" name="cohort" id="cohort" aria-describedby="helpId" placeholder="" value={cohort} onChange={(evt) => setCohort(evt.target.value)} />
            </div>
            <button className="btn btn-primary">Submit</button>
            <button className="btn" onClick={toggleAdd}>Cancel</button>
          </form>
        </React.Fragment> : <button className="btn btn-primary mr-2" onClick={toggleAdd}>Add Cohort</button>}
    </React.Fragment>
  )
}

export default CohortEditor;