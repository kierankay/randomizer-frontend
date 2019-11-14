import React, { useState } from 'react';
import Group from '../Group';
import GroupQueryForm from '../GroupQueryForm';
import GroupCreationForm from '../GroupCreationForm';
import CohortSelectorContainer from '../../containers/CohortSelectorContainer';
import RandomizeApi from '../../RandomizeApi';

const GroupList = props => {
  const [groups, setGroups] = useState([]);
  const [newGroup, setNewGroup] = useState([]);
  const [pairsShowing, setPairsShowing] = useState(5);
  const { currentCohort, currentCohortStudents } = props;

  async function getLastPairs(limit, cohort = currentCohort) {
    let result = await RandomizeApi.getLastPairs(limit, cohort)
    setPairsShowing(limit);
    setGroups([...result]);
  }

  async function createNewGroup(minDistance, cohort = currentCohort) {
    let result = await RandomizeApi.createNewGroup(minDistance, cohort);
    setNewGroup([...result]);
  }

  async function saveNewGroup(project, group = newGroup, cohort = currentCohort) {
    await RandomizeApi.saveNewGroup(group, project, cohort);
    getLastPairs(pairsShowing);
    setNewGroup([]);
  }

  let renderedGroups = groups.map(g =>
    <Group
      key={g.group.id}
      id={g.group.id}
      project={g.group.project}
      cohort={g.group.cohort}
      date={g.group.date}
      pairs={g.group.pairs}
    />);

  return (
    <div>
      <h1 className="text-center mb-5">Project Student Pair Generator</h1>
      <div className="mb-5">
        <CohortSelectorContainer />
        {currentCohort ?
          <React.Fragment>
            <div className="row">
              <GroupQueryForm processSubmit={getLastPairs} />
              <GroupCreationForm processSubmit={createNewGroup} currentCohortStudents={currentCohortStudents} />
            </div>
            {newGroup.length > 0 ?
              <div><Group
                handleSave={saveNewGroup}
                type="newGroup"
                cohort={currentCohort}
                pairs={newGroup}
              /></div>
              : null
            }
            <h2>Past Projects</h2>
            {renderedGroups}
          </React.Fragment>
          : null}
      </div>
    </div>
  )
}

export default GroupList;