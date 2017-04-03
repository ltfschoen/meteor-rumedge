import { Mongo } from 'meteor/mongo';

export const Candidates = new Mongo.Collection('candidates');

Candidates.allow({
  insert() { return false; },
  update() { return false; },
  remove() { return false; }
});

Candidates.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});

const CandidateSchema = new SimpleSchema({
  name: { type: String },
  agency: { type: String },
  design: { type: Number, defaultValue: 0},
  responsive: { type: Number, defaultValue: 0},
  performance: { type: Number, defaultValue: 0},
  databases: { type: Number, defaultValue: 0},
  testing: { type: Number, defaultValue: 0},
  security: { type: Number, defaultValue: 0},
  architecture: { type: Number, defaultValue: 0},
  debugging: { type: Number, defaultValue: 0},
  notes: { type: String, optional: true}
  // ,
  // owner: { type: String },
});

Candidates.attachSchema(CandidateSchema);