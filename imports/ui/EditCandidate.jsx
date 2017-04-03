import React, { Component } from 'react';

export default class EditCandidate extends Component {
  showAgencyStats() {
    this.props.showAgencyStats();
  }

  editCandidate(event) {
    event.preventDefault();

    let candidate = {
      _id: this.props.currentCandidate._id,
      name: this.refs.name.value,
      agency: this.refs.agency.value,
      design: this.refs.design.value,
      responsive: this.refs.responsive.value,
      performance: this.refs.performance.value,
      databases: this.refs.databases.value,
      testing: this.refs.testing.value,
      security: this.refs.security.value,
      architecture: this.refs.architecture.value,
      debugging: this.refs.debugging.value,
      notes: this.refs.notes.value,
      createdAt: new Date(),
      owner: Meteor.userId(),
    }

    Meteor.call('updateCandidate', candidate, (error) =>{
      if(error) {
        alert("Oops something went wrong: " + error.reason);
      } else {
        alert("Candidate updated");
        this.showAgencyStats();
      }
    });
  }

  render() {
    const currentCandidate = this.props.currentCandidate;

    return (
      <div className="row">
        <a name="lower"></a>
        <form className="col s12" onSubmit={this.editCandidate.bind(this)}>
          <h3>Edit candidate</h3>

          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Name" ref="name" type="text" className="validate" defaultValue={currentCandidate.name}/>
            </div>
            <div className="input-field col s6">
              <input placeholder="Agency" ref="agency" type="text" className="validate" defaultValue={currentCandidate.agency}/>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <h5>Design Abilities</h5>
              <select className="browser-default" ref="design" defaultValue={currentCandidate.design}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Responsive Abilities</h5>
              <select className="browser-default" ref="responsive" defaultValue={currentCandidate.responsive}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <h5>Performance Abilities</h5>
              <select className="browser-default" ref="performance" defaultValue={currentCandidate.performance}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Databases Abilities</h5>
              <select className="browser-default" ref="databases" defaultValue={currentCandidate.databases}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <h5>Testing Abilities</h5>
              <select className="browser-default" ref="testing" defaultValue={currentCandidate.testing}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Security Abilities</h5>
              <select className="browser-default" ref="security" defaultValue={currentCandidate.security}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <h5>Architecture Abilities</h5>
              <select className="browser-default" ref="architecture" defaultValue={currentCandidate.architecture}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Debugging Abilities</h5>
              <select className="browser-default" ref="debugging" defaultValue={currentCandidate.debugging}>
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <textarea placeholder="Notes" ref="notes" className="materialize-textarea"/>
            </div>
            <div className="input-field col s6">
              <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>

        </form>
      </div>
    )
  }
}
