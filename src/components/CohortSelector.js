import React, { useState, useEffect } from 'react';

const CohortSelector = (props) => {
  const { cohorts, currentCohort, getCohortsFromApi, updateCurrentCohort, loadIntoCohort } = props;
  const [cohort, setCohort] = useState(currentCohort || '');

  useEffect(() => {
    async function fetchData() {
      await getCohortsFromApi(); // loads cohorts from server into redux store
      setCohort(currentCohort) // add first cohort from server to redux store
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function updateData() {
      await updateCurrentCohort(cohort); // update currentCohort to redux
      if (loadIntoCohort && cohort) { // add cohort to state
        loadIntoCohort(cohort)
      } 
    }
    updateData();
  }, [cohort]);

  let cohortFields = cohorts ? cohorts.map(c =>
    <option key={c.cohort_name} value={c.cohort_name}>{c.cohort_name}</option>) : "Loading";
  return (
    <form>
      <div className="form-group">
        <label htmlFor="cohort">Select a cohort</label>
        <select className="form-control" id="cohort" name="cohort" value={cohort} onChange={(evt) => setCohort(evt.target.value)}>
          <option></option>
          {cohortFields}
        </select>
      </div>
    </form>
  )
}

export default CohortSelector;