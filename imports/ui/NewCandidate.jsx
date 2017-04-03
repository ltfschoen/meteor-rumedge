import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Candidates } from '../api/candidates';

export default class NewCandidate extends Component {
  showAgencyStats() {
    this.props.showAgencyStats();
  }

  submitCandidate(event) {
    event.preventDefault();

    let candidate = {
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

    Meteor.call('insertCandidate', candidate, (error) =>{
      if(error) {
        alert("Oops something went wrong: " + error.reason);
      } else {
        alert("Candidate added");
        this.showAgencyStats();
      }
    });
  }

  render() {
    const currentCandidate = this.props.currentCandidate;

    return (
      <div className="row">
        <a name="lower"></a>
        <form className="col s12" onSubmit={this.submitCandidate.bind(this)}>
          <h3>Add new candidate</h3>

          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Name" ref="name" type="text" className="validate"/>
            </div>
            <div className="input-field col s6">
              <input placeholder="Agency" ref="agency" type="text" className="validate"/>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <h5>Design Abilities</h5>
              <select className="browser-default" ref="design">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Responsive Abilities</h5>
              <select className="browser-default" ref="responsive">
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
              <select className="browser-default" ref="performance">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Databases Abilities</h5>
              <select className="browser-default" ref="databases">
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
              <select className="browser-default" ref="testing">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Security Abilities</h5>
              <select className="browser-default" ref="security">
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
              <select className="browser-default" ref="architecture">
                <option value="0">0 - Hasn't demonstrated skills</option>
                <option value="1">1 - Needs improvement</option>
                <option value="2">2 - Skill acquired</option>
                <option value="3">3 - Great skills/could teach</option>
              </select>
            </div>
            <div className="input-field col s6">
              <h5>Debugging Abilities</h5>
              <select className="browser-default" ref="debugging">
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
