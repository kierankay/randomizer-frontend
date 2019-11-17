import React from 'react';
import Pair from './Pair';
import NewGroupSaveForm from './NewGroupSaveForm';

const Group = props => {
  let { project, date, pairs, type, handleSave } = props;

  return (
    <div className="card card-header my-4" style={type ? { backgroundColor: "rgb(218, 248, 226)" } : null}>
      {project ?
        <h1 style={{ display: "inline" }}>{project} <span style={{ fontSize: "20px" }}>{date}</span></h1> :
        <NewGroupSaveForm handleSave={handleSave} />
      }
      <div className="px-3 my-3">{pairs.map((pair, idx) => <Pair students={pair} pairIdx={idx} />)}</div>
    </div>
  )
}

export default Group;