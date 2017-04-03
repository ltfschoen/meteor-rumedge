import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import { red500 } from 'material-ui/styles/colors';

export default class AgencyList extends Component {
  updateCurrentCandidate(candidate) {
    this.props.updateCurrentCandidate(candidate);
  }

  deleteCandidate(candidateId) {
    Meteor.call('deleteCandidate', candidateId, (error) =>{
      if(error) {
        alert("Oops something went wrong: " + error.reason);
      } else {
        console.log("Candidate deleted!");
      }
    });
  }

  render() {
    return (
      <ListItem
        primaryText={this.props.candidate.name}
        leftAvatar={<Avatar src="candidate.png"/>}
        rightIcon={<ActionDeleteForever hoverColor={red500}
          onClick={this.deleteCandidate.bind(this, this.props.candidate._id)}/>}
          onClick={this.updateCurrentCandidate.bind(this, this.props.candidate)}
        />
    )
  }
}
