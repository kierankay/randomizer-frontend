import React, { useState } from 'react';

const CohortEditor = (props) => {
  const [cohort, setCohort] = useState('');
  const [add, setAdd] = useState(false);

  async function handleSubmit(evt) {
    evt.preventDefault();
    await props.addCohortToApi(cohort);
    setCohort('');
    setAdd(false);
  }

  function toggleAdd() {
    setAdd(!add);
  }

  return (
    <>
      {add ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="cohort">New cohort name</label>
            <input
              type="text"
              className="form-control"
              name="cohort"
              id="cohort"
              aria-describedby="helpId"
              placeholder=""
              value={cohort}
              onChange={(evt) => setCohort(evt.target.value)}
            />
          </div>
          <button type="button" className="btn btn-primary">Submit</button>
          <button type="button" className="btn" onClick={toggleAdd}>Cancel</button>
        </form>
      ) : <button type="button" className="btn btn-primary mr-2" onClick={toggleAdd}>Add Cohort</button>}
    </>
  );
};

export default CohortEditor;
