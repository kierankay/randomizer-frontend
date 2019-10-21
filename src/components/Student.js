import React from 'react';

class Student extends React.Component {

  render() {
    let { firstName, lastName } = this.props;
    return (
      <div className="card col-5">
        <div className="card-body">
        {firstName} {lastName}
        </div>
      </div>
    )
  }
}

export default Student;