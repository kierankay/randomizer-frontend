import React from 'react';
import { Link } from 'react-router-dom';

const GreetingPage = () => (
  <>
    <div className="jumbotron">
      <h1 className="display-4">Project Group Randomizer</h1>
      <p className="lead">In courses where students are frequently paired for lab projects, optimal pairing of students can be a challenge.</p>
      <p className="lead">Of the many approaches, randomized pairing has measurable advantages, but can be challenging administer consistently.</p>
      <p className="lead">The Randomizer helps solve that problem, evenly distributing students among pairs, ensuring they haven`&apos;`t happened less than a pre-fixed distance ago, and tracking those pairings.</p>
      <p className="lead">Create an account to start pairing your students.</p>
      <hr className="my-4" />
      <p className="lead">
        <Link className="btn btn-primary" to="/sign-up" role="button">Sign Up</Link>
      </p>
    </div>
  </>
);

export default GreetingPage;
