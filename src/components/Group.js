import React from 'react';
import Pair from './Pair';
import NewGroupSaveForm from './NewGroupSaveForm'

class Group extends React.Component {


  render() {
    let { project, date, pairs } = this.props;
    return (
      <div className="card card-header mb-3" style={this.props.type ? { backgroundColor: "rgb(218, 248, 226)" } : null}>
        {project ? <h1 style={{ display: "inline" }}>{project} <span style={{ fontSize: "20px" }}>{date}</span></h1> : <NewGroupSaveForm handleSave={this.props.handleSave} />}
        {pairs.map((pair, idx) => <Pair students={pair} pairIdx={idx} />)}
      </div>
    )
  }
}

export default Group;