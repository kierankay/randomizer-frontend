import React from 'react';
import Student from './Student';

class Cohort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      addingStudent: false
    }
  }

  render() {
      let { cohort, students } = this.props;
      return (
        <div className="card card-header mb-3" style={{ backgroundColor: "rgb(218, 248, 226)" }}>
          <h1 style={{ display: "inline" }}>{cohort} <span style={{ fontSize: "20px" }}></span></h1> 
          {students.map(s => <Student firstName={s.first_name} lastName={s.last_name} />)}
          {this.state.addingstudent ? 
          <form>
            {console.log(this.state.addingStudent)}
          </form>
          : <button className="btn btn-primary" onClick={()=> this.setState({addingStudent: !this.state.addingStudent})}>Add Student</button>}
        </div>
      )
  }
}

export default Cohort;