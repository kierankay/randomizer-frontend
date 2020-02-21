import React from 'react';
import CohortSelectorContainer from '../../containers/CohortSelectorContainer';
import CohortEditorContainer from '../../containers/CohortEditorContainer';
import Cohort from '../Cohort';


const AdminConsole = (props) => {
  const {
    currentCohortStudents, currentCohort, addStudentToApi,
  } = props;

  return (
    <>
      <>
        <CohortSelectorContainer />
        <CohortEditorContainer />
      </>
      {currentCohort
        ? (
          <Cohort
            cohort={currentCohort}
            students={currentCohortStudents}
            addStudentToApi={addStudentToApi}
          />
        )
        : null}
    </>
  );
};

export default AdminConsole;

// cohort admin page
// see existing cohorts and students
// add cohort and edit students in that cohort
// removing a student should mark them as de-enrolled in database, not delete
// do not include disenrolled students in pairing, but show them in past pairs
// add student
// user admin page
// see all users
// add and remove privileges
