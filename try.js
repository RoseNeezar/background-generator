
class Player {
  constructor(name,type) {
    this.name = name;
    this.type = type;
  }
  introduce(){
    console.log("intro", `hi i am ${this.name} and im a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name,type) {
    super(name,type)
  }
  play(){
    console.log("play", `i am also a ${this.type}`)
  }
}

class Warrior extends Player {
  constructor(name,type) {
    super(name,type)
  }
  play(){
    console.log("HELLO", `i am also a ${this.type}`)
  }
  defeat(){
    console.log("dies", `help a brother out please`)
  }
}
const wizard1 = new Wizard('shaw','dark magic')