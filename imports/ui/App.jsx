import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';

// database - collection
import { Candidates } from '../api/candidates';

import AgencyList from './Agency-list';
import AgencyStats from './Agency-stats';
import Candidate from './Candidate';
import AccountsWrapper from './AccountsWrapper';
import NewCandidate from './NewCandidate';
import EditCandidate from './EditCandidate';

let initialCandidate = {
  name: "Demo Candidate",
  agency: "Demo Agency",
  design: 1,
  responsive: 2,
  performance: 1,
  databases: 0,
  testing: 1,
  security: 0,
  architecture: 1,
  debugging: 0,
  notes: "Demo candidate",
}

export class App extends Component {
  constructor(props) {
    super(props);

    // setting up the state
    this.state = {
      currentCandidate: initialCandidate,
      showNewCandidate: false,
      showEditCandidate: false,
    };
    this.updateCurrentCandidate = this.updateCurrentCandidate.bind(this);
    this.showNewForm = this.showNewForm.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
    this.showAgencyStats = this.showAgencyStats.bind(this);
    this.initCandidate = this.initCandidate.bind(this);
  }

  initCandidate() {
    Meteor.call('initCandidate', initialCandidate, (error) => {
      if(error) {
        alert("Oops something went wrong: " + error.reason);
      } else {
        alert("Inital Candidate added");
        browserHistory.push('/');
      }
    });
  }

  renderCandidates() {
    return this.props.candidates.map((candidate) => (
      <AgencyList key={candidate._id} candidate={candidate} 
                  updateCurrentCandidate={this.updateCurrentCandidate}/>
    ));
  }

  updateCurrentCandidate(candidate) {
    this.setState({
      currentCandidate: candidate,
    });
  }

  showNewForm() {
    this.setState({
      showNewCandidate: true,
      showEditCandidate: false
    });
    window.location.href = "#lower";
  }

  showEditForm() {
    this.setState({
      showNewCandidate: false,
      showEditCandidate: true,
    });
    window.location.href = "#lower";
  }

  showAgencyStats() {
    this.setState({
      showEditCandidate: false,
    });
  }

  showForm() {
    if(this.state.showNewCandidate === true) {
      return (<NewCandidate currentCandidate={this.state.currentCandidate}
      showAgencyStats={this.showAgencyStats}/>);
    } else if (this.state.showEditCandidate === true) {
      return (<EditCandidate currentCandidate={this.state.currentCandidate}
      showAgencyStats={this.showAgencyStats}/>);
    } else {
      return (<AgencyStats candidates={this.props.candidates}/>);
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBar
            title="Rumedge HR Stats App"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false}>
              {/* <AccountsWrapper /> */}
            </AppBar>
          <div className="row">
            <div className="col s12 m7" ><Candidate candidate={this.state.currentCandidate}
                                                    showAgencyStats={this.showAgencyStats} 
                                                    showEditForm={this.showEditForm}/></div>
            <div className="col s12 m5" >
              <h2>Agency list</h2>
              <Link to="#" className="waves-effect waves-light btn" 
                           onClick={this.showNewForm}>New Candidate</Link>
              <Divider/>
                <List>
                  {this.renderCandidates()}
                </List>
              <Divider/>
            </div>

          </div>
          <div className="row">
            <div className="col s12" >
              <br/>
              <Divider/>
              {this.showForm()}
              <Divider/>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  candidates: PropTypes.array.isRequired,
};

export default createContainer(() => {
  Meteor.subscribe('candidates');
  const user = Meteor.userId();

  return {
    candidates: Candidates.find({ owner: user }, {sort: { name: 1}}).fetch(),
  };
}, App);
