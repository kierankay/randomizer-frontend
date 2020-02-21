import React, { useState } from 'react';
import Group from '../Group';
import GroupQueryForm from '../GroupQueryForm';
import GroupCreationForm from '../GroupCreationForm';
import CohortSelectorContainer from '../../containers/CohortSelectorContainer';
import RandomizeApi from '../../RandomizeApi';

const GroupList = (props) => {
  const [groups, setGroups] = useState([]);
  const [newGroup, setNewGroup] = useState([]);
  const [pairsShowing, setPairsShowing] = useState(5);
  const { currentCohort, currentCohortStudents } = props;

  async function getLastPairs(limit, cohort = currentCohort) {
    const result = await RandomizeApi.getLastPairs(limit, cohort.id);
    setPairsShowing(limit);
    setGroups([...result]);
  }

  async function createNewGroup(minDistance, cohort = currentCohort) {
    const result = await RandomizeApi.createNewGroup(minDistance, cohort.id);
    setNewGroup([...result]);
  }

  async function saveNewGroup(project, group = newGroup, cohort = currentCohort) {
    await RandomizeApi.saveNewGroup(group, project, cohort.id);
    getLastPairs(pairsShowing);
    setNewGroup([]);
  }

  const renderedGroups = groups.map((g) => (
    <Group
      key={g.group.id}
      id={g.group.id}
      project={g.group.project}
      cohort={g.group.cohort}
      date={g.group.date}
      pairs={g.group.pairs}
    />
  ));

  let newGroupInfo;

  if (newGroup.length > 0) {
    newGroupInfo = (
      <div>
        <Group
          handleSave={saveNewGroup}
          type="newGroup"
          cohort={currentCohort}
          pairs={newGroup}
        />
      </div>
    );
  } else {
    newGroupInfo = null;
  }

  return (
    <div>
      <h1 className="text-center mb-5">Student Pair Generator</h1>
      <div className="mb-5">
        <CohortSelectorContainer />
        {currentCohort
          ? (
            <>
              <div className="row">
                <GroupQueryForm getLastPairs={getLastPairs} cohort={currentCohort} />
                <GroupCreationForm
                  createNewGroup={createNewGroup}
                  currentCohortStudents={currentCohortStudents}
                />
              </div>
              {newGroupInfo}
              <h2 className="mt-5">Past Projects</h2>
              {renderedGroups}
            </>
          )
          : null}
      </div>
    </div>
  );
};

export default GroupList;
