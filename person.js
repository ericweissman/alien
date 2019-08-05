class Person {
  constructor(obj) {
    this.name = obj.name;
    this.memories = obj.memories;
    this.sleeping = obj.sleeping || false;
  }

  sleep() {
    this.sleeping = true;
    return 'ZZZ'
  }

  makeMemories(memories) {
    for (var i = 0; i < memories.length; i++) {
      this.memories.unshift(memories[i])
    }
  }
}


module.exports = Person;