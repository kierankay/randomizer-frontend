import React from 'react';
import { Link } from 'react-router-dom';

const GreetingPage = props => {
  return (
    <React.Fragment>
      <div class="jumbotron">
        <h1 class="display-4">Student Pair Randomizer</h1>
        <p class="lead">The student pair randomizer is the perfect tool for fairly pairing students up for class assignments and projects. You can add classes, students to each class, and configure the minimum distance to the last identical pairing.</p>
        <hr class="my-4" />
        <p class="lead">
          <Link class="btn btn-primary" to="/sign-up" role="button">Sign Up</Link>
        </p>
      </div>
    </React.Fragment>
  )
}

export default GreetingPage;