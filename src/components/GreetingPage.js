import React from 'react';
import { Link } from 'react-router-dom';

const GreetingPage = props => {
  return (
    <React.Fragment>
      <div className="jumbotron">
        <h1 className="display-4">Student Pair Randomizer</h1>
        <p className="lead">The student pair randomizer is the perfect tool for fairly pairing students up for class assignments and projects. You can add classes, students to each class, and configure the minimum distance to the last identical pairing.</p>
        <hr className="my-4" />
        <p className="lead">
          <Link className="btn btn-primary" to="/sign-up" role="button">Sign Up</Link>
        </p>
      </div>
    </React.Fragment>
  )
}

export default GreetingPage;