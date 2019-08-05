var assert = require('chai').assert;
var Person = require('../person');

describe('Person', function () {
  it.skip('should have a name and memories', function () {
    var personalMemories = ['brush teeth', 'finished chapter 2'];
    var person = new Person({ name: 'Paul', memories: personalMemories, sleeping: false });

    assert.equal(person.name, 'Paul');
    assert.deepEqual(person.memories, ['brush teeth', 'finished chapter 2'])
  });

  it.skip('should not be sleeping by default', function() {
    var person1 = new Person({name: 'Kyle', memories: ['playing golf']})
    var person2 = new Person({name: 'Susan', memories: ['eating pie'], sleeping: true});

    assert.equal(person1.sleeping, false);
    assert.equal(person2.sleeping, true);
  })

  it.skip('should be able to go to sleep', function () {
    var person1 = new Person({ name: 'Joanna', memories: ['buying food', 'reading'] })
    var person2 = new Person({ name: 'Lucy', memories: ['tuck in kids', 'flozsing'] })
    
    assert.equal(person1.sleeping, false);
    var timeForBed1 = person1.sleep();
    assert.equal(person1.sleeping, true);
    assert.equal(timeForBed1, 'ZZZ');

    assert.equal(person2.sleeping, false);
    var timeForBed2 = person2.sleep();
    assert.equal(person2.sleeping, true);
    assert.equal(timeForBed2, 'ZZZ');
  });

  it.skip('should be able to make new memories', function() {
    var person = new Person({name: 'Mark', memories: ['mow lawn', 'drink soda']})
    var newMemories = ['meal prep', 'order postage stamps'];

    assert.deepEqual(person.memories, ['mow lawn', 'drink soda']);
    assert.equal(person.memories.length, 2);

    person.makeMemories(newMemories);
    assert.deepEqual(person.memories, ['order postage stamps', 'meal prep', 'mow lawn', 'drink soda']);
    assert.equal(person.memories.length, 4);
  });
})