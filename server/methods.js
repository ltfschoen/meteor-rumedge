import { Meteor } from 'meteor/meteor';
import { Candidates } from '../imports/api/candidates';

Meteor.methods({
  initCandidate(candidate) {
    if (Candidates.find({}).fetch().length == 0) {
      Candidates.insert(candidate);
    }
  },

  insertCandidate(candidate) {
    // console.log(JSON.stringify(candidate, null, 2));
    Candidates.insert(candidate);
  },

  updateCandidate(candidate) {
    Candidates.update(candidate._id,
    { $set: candidate});
  },

  deleteCandidate(candidateId) {
    console.log("FF");
    // console.log("AA", Candidates.findOne({_id: candidateId})[0]["name"] == "Demo Candidate");

    // Prevent deletion of demo candidate
    if (Candidates.findOne({_id: candidateId})[0]["name"] == "Demo Candidate" ) {
      return false;
    }
    Candidates.remove(candidateId);
  }
});
