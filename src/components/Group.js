import React from 'react';
import Pair from './Pair';
import NewGroupSaveForm from './NewGroupSaveForm'

const Group = props => {
  let { project, date, pairs, type, handleSave } = props;

  return (
    <div className="card card-header mb-3" style={type ? { backgroundColor: "rgb(218, 248, 226)" } : null}>
      {project ?
        <h1 style={{ display: "inline" }}>{project} <span style={{ fontSize: "20px" }}>{date}</span></h1> :
        <NewGroupSaveForm handleSave={handleSave} />
      }
      {pairs.map((pair, idx) => <Pair key={project + date + idx} students={pair} pairIdx={idx} />)}
    </div>
  )
}

export default Group;