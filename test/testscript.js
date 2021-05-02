'use strict';
// eslint-disable-next-line no-unused-vars
const {expect} = require('chai');
const chai = require('chai');
const data = require('../data.js');

describe('data', () => {
//
// These are my tests there are many like it, but these are mine
//
  it('returns requested doggy', () => {
    const result = data.getItem('Freddie');
    chai.expect(result).to.deep.equal({
      name: 'Freddie',
      breed: 'goldendoodle',
      age: '3',
      height: '3ft',
      weight: '30lbs',
      img: 'freddie.jpg',
    });
  });
  it('fails to add an existing dog', () => {
    const result = data.addItem({
      name: 'Freddie',
      breed: 'goldendoodle',
      age: '3',
      height: '3ft',
      weight: '30lbs',
      img: 'freddie.jpg'});
    expect(result.added).to.be.false;
  });

  it('fails to return an w/ invalid doggo', () => {
    const result = data.getItem('fake');
    chai.expect(result).to.be.undefined;
  });

  it('Adds requested doggy', () => {
    const result = data.addItem( {
      name: 'Bonsai',
      breed: 'Corgie',
      age: '2',
      height: '2ft',
      weight: '15lbs',
      img: 'bonsai.jpg'});
    chai.expect(result.added).to.be.true;
  });

  it('deletes an existing doggo', () => {
    const result = data.deleteItem('June');
    expect(result.deleted).to.be.true;
  });

  it('fails to delete an invalid doggy', () => {
    const result = data.deleteItem('Doggy');
    expect(result.deleted).to.be.false;
  });
});
