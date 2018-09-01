
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

class warrior extends Player {
  constructor(name,type) {
    super(name,type)
  }
  play(){
    console.log("play", `i am also a ${this.type}`)
  }
}
const wizard1 = new Wizard('shaw','dark magic')