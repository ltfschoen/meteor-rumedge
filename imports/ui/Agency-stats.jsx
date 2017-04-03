import React, { Component } from 'react';
import {Radar} from 'react-chartjs-2';
import Divider from 'material-ui/Divider';

export default class AgencyStats extends Component {
  render() {
    const candidates = this.props.candidates;

    const numCandidates = candidates.length;

    const design = Math.round((candidates.reduce((design, candidate) => {
      return design + candidate.design;
    }, 0) / ( 3 * numCandidates )) * 100 );

    const responsive = Math.round((candidates.reduce((responsive, candidate) => {
      return responsive + candidate.responsive;
    }, 0) / ( 3 * numCandidates )) * 100 );

    const performance = Math.round((candidates.reduce((performance, candidate) => {
      return performance + candidate.performance;
    }, 0) / ( 3 * numCandidates )) * 100 );

    const databases = Math.round((candidates.reduce((databases, candidate) => {
      return databases + candidate.databases;
    }, 0) / ( 3 * numCandidates )) * 100 );

    const testing = Math.round((candidates.reduce((testing, candidate) => {
      return testing + candidate.testing;
    }, 0) / ( 3 * numCandidates )) * 100 );

    const security = Math.round((candidates.reduce((security, candidate) => {
      return security + candidate.security;
    }, 0) / ( 3 * numCandidates )) * 100 );

    const architecture = Math.round((candidates.reduce((architecture, candidate) => {
      return architecture + candidate.architecture;
    }, 0) / ( 3 * numCandidates )) * 100 );

    const debugging = Math.round((candidates.reduce((debugging, candidate) => {
      return debugging + candidate.debugging;
    }, 0) / ( 3 * numCandidates )) * 100 );

    const backend = Math.round((databases + testing + security + architecture + debugging)/5);
    const frontend = Math.round((responsive + design +
      performance + testing + architecture + debugging)/6);
    const total = Math.round((responsive + design +
      performance + testing + architecture + debugging + databases + security)/8);

    const data = {
      labels: ['Design', 'Responsive', 'Performance', 'Databases', 'Testing', 'Security', 'Architecture', 'Debugging'],
      datasets: [
        {
          label: 'In % of max possible',
          backgroundColor: 'rgba(143, 202, 249, 0.2)',
          borderColor: 'rgba(12, 71, 161, 1)',
          pointBackgroundColor: 'rgba(12, 71, 161, 1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(12, 71, 161, 1)',
          data: [design, responsive, performance, databases, testing,
            security, architecture, debugging]
        }
      ]
    };

    return (
      <div>
        <h2>Agency Stats</h2>
        <div className="row">
          <div className="col s12 m7">
            <Radar data={data}
            width={500}
            height={500}
            option={{
              maintainAspectRatio: false
            }}/>
          </div>
          <div className="col s12 m5">
            <h5>Scores in % of max possible</h5>
            <Divider />
            <h5>Agency's frontend: {frontend}%</h5>
            <h5>Agency's backend: {backend}%</h5>
            <h5>Agency's total: {total}%</h5>
            <Divider />
            <h5>Number of candidates: {numCandidates}</h5>
          </div>
        </div>
      </div>
    );
  }
}
