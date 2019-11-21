import React, { useState } from 'react';
import Student from './Student';
import uuid from 'uuid/v4';

// TODO - add student addition after submitting form
// currently submits directly through API, which is not updating the students passed in as props
// modify to change to redux action / reducer and display student immediately

const Cohort = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [addingStudent, setAddingStudent] = useState(false);
  const { cohort, students, addStudentToApi } = props;

  function handleSubmit(evt) {
    evt.preventDefault();
    addStudentToApi(firstName, lastName, cohort.id);
    setFirstName('');
    setLastName('');
    setAddingStudent(false);
  }

  return (
    <div className="card card-header my-3" style={{ backgroundColor: "rgb(218, 248, 226)" }}>
      <div className="row d-flex flex-row p-3">
        <h1 className="d-block col-12">{cohort.cohort_name} <span style={{ fontSize: "20px" }}></span></h1>
        {students ? students.map(s => <Student key={uuid()} firstName={s.first_name} lastName={s.last_name}/>) : null}
      </div>
      <div>
        {addingStudent ?
          <form onSubmit={handleSubmit} className="row d-flex flex-row">
            <div className="form-group col-6">
              <label htmlFor="firstName">First Name</label>
              <input type="text" className="form-control" name="firstName" id="firstName" aria-describedby="helpId" value={firstName} onChange={(evt) => setFirstName(evt.target.value)} />
            </div>
            <div className="form-group col-6">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" className="form-control" name="lastName" id="lastName" aria-describedby="helpId" value={lastName} onChange={(evt) => setLastName(evt.target.value)} />
            </div>
            <div className="col-12">
            <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
          : <div className="d-block"><button className="btn btn-primary mt-3" onClick={() => setAddingStudent(!addingStudent)}>Add Student</button></div>}
      </div>
    </div>
  )
}

export default Cohort;