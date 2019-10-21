import React from 'react';
import Student from './Student';

class Pair extends React.Component {

  render() {
    let { student_1, student_2 } = this.props.students;
    let pairIdx = this.props.pairIdx
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
}

export default Pair;