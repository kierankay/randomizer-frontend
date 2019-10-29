import React from 'react';
import Student from './Student';

const Pair = props => {
  const { student_1, student_2 } = props.students;
  const { pairIdx } = props
  
  return (
    <div>
      {
        <div className="row">
          <div className="card col-2"><div className="card-body">{pairIdx}</div></div>
          {student_1 ? <Student firstName={student_1.first_name} lastName={student_1.last_name} /> : null}
          {student_2 ? <Student firstName={student_2.first_name} lastName={student_2.last_name} /> : null}
        </div>
      }
    </div>
  )
}

export default Pair;