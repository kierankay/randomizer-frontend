import React, { useState, useEffect } from 'react';

const CohortSelector = (props) => {
  const { cohorts, currentCohort, getCohortsFromApi, updateCurrentCohort, getStudentsFromApi } = props;
  const [cohort, setCohort] = useState(currentCohort || '');

  useEffect(() => {
    async function fetchData() {
      await getCohortsFromApi(); // loads cohorts from server into redux store
      setCohort(currentCohort) // add any current cohort from redux store to form
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function updateData() {
      await updateCurrentCohort(cohort); // update selected cohort to store
      await getStudentsFromApi(cohort.id); // add students to store
    }
    updateData();
  }, [cohort]);

  let cohortFields = cohorts ? cohorts.map(c =>
    <option key={c.id} value={JSON.stringify(c)}>{c.cohort_name}</option>) : "Loading";
  return (
    <form>
      <div className="form-group">
        <label htmlFor="cohort">Select a cohort</label>
        <select className="form-control" id="cohort" name="cohort" onChange={(evt) => setCohort(JSON.parse(evt.target.value))}>
          <option></option>
          {cohortFields}
        </select>
      </div>
    </form>
  )
}

export default CohortSelector;