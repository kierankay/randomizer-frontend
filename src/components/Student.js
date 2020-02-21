import React from 'react';

const Student = (props) => {
  let { firstName, lastName } = props;
  return (
    <div className="card col-6">
      <div className="card-body">
        {firstName}
        {lastName}
      </div>
    </div>
  );
};

export default Student;
