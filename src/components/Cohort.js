import React, { useState } from 'react';
import Student from './Student';

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
    addStudentToApi(firstName, lastName, cohort);
    setFirstName('');
    setLastName('');
    setAddingStudent(false);
  }

  return (
    <div className="card card-header mb-3" style={{ backgroundColor: "rgb(218, 248, 226)" }}>
      <h1 style={{ display: "inline" }}>{cohort} <span style={{ fontSize: "20px" }}></span></h1>
      {students ? students.map(s => <Student key={s.first_name + s.last_name} firstName={s.first_name} lastName={s.last_name} />) : null}
      {addingStudent ?
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" className="form-control" name="firstName" id="firstName" aria-describedby="helpId" value={firstName} onChange={(evt) => setFirstName(evt.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" className="form-control" name="lastName" id="lastName" aria-describedby="helpId" value={lastName} onChange={(evt) => setLastName(evt.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        : <button className="btn btn-primary" onClick={() => setAddingStudent(!addingStudent)}>Add Student</button>}
    </div>
  )
}

export default Cohort;