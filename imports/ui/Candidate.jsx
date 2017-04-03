import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { blue200, blue900 } from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: 12,
  },
};

export default class Candidate extends Component {
  showAgencyStats() {
    this.props.showAgencyStats();
  }

  showEditForm() {
    this.props.showEditForm();
  }

  render() {
    const candidate = this.props.candidate;
    const backend = candidate.databases + candidate.testing + candidate.security + candidate.architecture + candidate.debugging;
    const frontend = candidate.responsive + candidate.architecture + candidate.design + candidate.performance + candidate.testing + candidate.debugging;
    const total = candidate.responsive + candidate.architecture + candidate.design + candidate.performance + candidate.testing + candidate.debugging + candidate.databases + candidate.security;

    return (
      <Card>
        <CardMedia
          overlay={<CardTitle title={candidate.name} subtitle={`Frontend: ${frontend} - Backend: ${backend} - Total: ${total}`} />}
        >
          <img src="candidate.png" />
        </CardMedia>
        <CardText>
          <div style={styles.wrapper}>
            <Chip
            backgroundColor={blue200}
            style={styles.chip}
            >
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                {candidate.design}
              </Avatar>
              Design
            </Chip>
            <Chip
            backgroundColor={blue200}
            style={styles.chip}
            >
            <Avatar size={32} color={blue200} backgroundColor={blue900}>
              {candidate.responsive}
            </Avatar>
            Responsive
          </Chip>
          <Chip
            backgroundColor={blue200}
            style={styles.chip}
            >
            <Avatar size={32} color={blue200} backgroundColor={blue900}>
              {candidate.performance}
            </Avatar>
            Performance
          </Chip>
          <Chip
            backgroundColor={blue200}
            style={styles.chip}
            >
            <Avatar size={32} color={blue200} backgroundColor={blue900}>
              {candidate.databases}
            </Avatar>
            Database
          </Chip>
          <Chip
            backgroundColor={blue200}
            style={styles.chip}
            >
            <Avatar size={32} color={blue200} backgroundColor={blue900}>
              {candidate.testing}
            </Avatar>
            Testing
          </Chip>
          <Chip
            backgroundColor={blue200}
            style={styles.chip}
            >
            <Avatar size={32} color={blue200} backgroundColor={blue900}>
              {candidate.security}
            </Avatar>
            Security
          </Chip>
          <Chip
            backgroundColor={blue200}
            style={styles.chip}
            >
            <Avatar size={32} color={blue200} backgroundColor={blue900}>
              {candidate.architecture}
            </Avatar>
            Architecture
          </Chip>
          <Chip
            backgroundColor={blue200}
            style={styles.chip}
            >
            <Avatar size={32} color={blue200} backgroundColor={blue900}>
              {candidate.debugging}
            </Avatar>
            Debugging
          </Chip>
          </div>
        </CardText>
        <CardActions>
          <RaisedButton
            label="Edit"
            labelPosition="after"
            style={styles.button}
            onClick={this.showEditForm.bind(this)}
          />
          <RaisedButton
            label="Stats"
            labelPosition="after"
            style={styles.button}
            onClick={this.showAgencyStats.bind(this)}
          />
        </CardActions>
      </Card>
    )
  }
}
