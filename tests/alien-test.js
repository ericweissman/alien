var assert = require('chai').assert;
var Alien = require('../alien');
var Person = require('../person');

describe('Alien', function () {
  it.skip('should start off with no abductees', function () {
    var alien = new Alien({ homePlanet: 'WXX55', color: 'light green' });
    assert.deepEqual(alien.abductees, []);
  });

  it.skip('should be able to abduct a person when they are sleeping', function () {
    var alien = new Alien({ name: 'UU736', color: 'yellow green' });
    var person1 = new Person({ name: 'Paul', memories: ['brush teeth', 'finished chapter 2'], sleeping: true });
    var person2 = new Person({ name: 'Marge', memories: ['play with kittens', 'getting ice cream'], sleeping: false });

    assert.deepEqual(alien.abductees, []);
    alien.beamUp(person1);
    assert.deepEqual(alien.abductees, [person1]);
    assert.equal(alien.abductees.length, 1)
    alien.beamUp(person2);
    assert.deepEqual(alien.abductees, [person1]);
    assert.equal(alien.abductees.length, 1);
  });

  it.skip('should only be able to abduct 3 humans and will erase the memories of humans it returns', function () {
    var alien = new Alien({ name: 'LNN75', color: 'purple' });
    var person1 = new Person({ name: 'Paul', memories: ['brush teeth', 'finished chapter 2'], sleeping: true });
    var person2 = new Person({ name: 'Marge', memories: ['play with kittens', 'getting ice cream'], sleeping: true });
    var person3 = new Person({ name: 'Adam', memories: ['listen to music', 'set alarm'], sleeping: true });
    var person4 = new Person({ name: 'Whitney', memories: ['go climbing', 'make dinner'], sleeping: true });

    assert.deepEqual(alien.abductees, []);
    alien.beamUp(person1);
    alien.beamUp(person2);
    alien.beamUp(person3);
    assert.deepEqual(alien.abductees, [person1, person2, person3]);
    assert.equal(alien.abductees.length, 3);

    alien.beamUp(person4);
    assert.deepEqual(alien.abductees, [person2, person3, person4]);
    assert.deepEqual(person1.memories, []);
  });
});

