import React from 'react';
import Group from './Group';
import GroupQueryForm from './GroupQueryForm';
import GroupCreationForm from '../components/GroupCreationForm';
import CohortSelectorContainer from '../containers/CohortSelectorContainer';
import RandomizeApi from '../RandomizeApi';

class GroupList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      groups: [
      //   {
      //   group: {
      //     id: 1,
      //     project: "Jobly",
      //     date: "7/25/19",
      //     cohort: "r13",
      //     pairs: [
      //       { student_1: { first_name: "Andy", last_name: "Apple" }, student_2: { first_name: "Bob", last_name: "Brodie" } },
      //       { student_1: { first_name: "Charlie", last_name: "Chaplain" }, student_2: { first_name: "Dario", last_name: "Dumas" } },
      //       { student_1: { first_name: "Edgar", last_name: "Eaves" }, student_2: { first_name: "Filthy", last_name: "Frank" } },
      //       { student_1: { first_name: "Gina", last_name: "Galpagos" } }
      //     ]
      //   }
      // }
    ],
      newGroup: [],
      pairsShowing: 5
    }
    this.getLastPairs = this.getLastPairs.bind(this);
    this.createNewGroup = this.createNewGroup.bind(this);
    this.saveNewGroup = this.saveNewGroup.bind(this);
  }

  async getLastPairs(limit, cohort=this.props.currentCohort) {
    let result = await RandomizeApi.getLastPairs(limit, cohort)
    this.setState({ pairsShowing: limit, groups: [...result] });
  }

  async createNewGroup(minDistance, cohort=this.props.currentCohort) {
    let result = await RandomizeApi.createNewGroup(minDistance, cohort)
    this.setState({ newGroup: [...result] })
  }

  async saveNewGroup(project, group=this.state.newGroup, cohort=this.props.currentCohort) {
    await RandomizeApi.saveNewGroup(group, project, cohort)
    this.getLastPairs(this.state.pairsShowing)
    this.setState({ newGroup: [] })
  }

  render() {
    
    let renderedGroups = this.state.groups.map(g =>
      <Group
        key={g.group.id}
        id={g.group.id}
        project={g.group.project}
        cohort={g.group.cohort}
        date={g.group.date}
        pairs={g.group.pairs}
      />)
    return (
      <div>
        <h1 className="text-center mb-5">Project Student Pair Generator</h1>
        <div className="mb-5">
          <CohortSelectorContainer />
          <div className="row">
            <GroupQueryForm processSubmit={this.getLastPairs} />
            <GroupCreationForm processSubmit={this.createNewGroup} />
          </div>
        </div>
        {this.state.newGroup.length > 0 ? 
          <div><Group 
            handleSave={this.saveNewGroup} 
            type="newGroup" 
            cohort={this.props.currentCohort} 
            pairs={this.state.newGroup} 
          /></div> 
          : null
          }
        <h2>Past Projects</h2>
        {renderedGroups}
      </div>
    )
  }
}

export default GroupList;