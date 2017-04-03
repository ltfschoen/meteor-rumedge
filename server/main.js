import { Meteor } from 'meteor/meteor';
import { Candidates } from '../imports/api/candidates';

Meteor.startup(() => {
  Meteor.publish('candidates', function() {
    return Candidates.find({});
  })
});
