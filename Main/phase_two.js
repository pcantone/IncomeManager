
var person = null
var job = null
var dayCounter = 0;
var payDay = 14;

chanceOfPhysicalIll = null
chanceOfMentalIll = null

timeTillNextHeater = 15

/* Person Attribute Class */
function phaseTwo(j){
    job = j; //job object

    chanceOfPhysicalIll = getPDemand() - getPTolerance()
    chanceOfPhysicalIll = chanceOfPhysicalIll > 10 ? chanceOfPhysicalIll : 10

    // chanceOfMentalIll = getMDemand() - getMTolerance()
    // chanceOfMentalIll = chanceOfMentalIll > 10 ? chanceOfMentalIll : 10

    // this.health = 100;
    // this.money = 100;
    // this.hunger = 100;
    // this.happiness = 100;
}

function checkIfIll(){
  if( Math.random() < .5)
    person.setPIll( Math.random()*100 < chanceOfPhysicalIll ? true : false )
  else
    person.setMIll( Math.random()*100 < chanceOfMentalIll ? true : false )
}

function nextEvent(){
  dayCounter++
  payDay--
  setFood(-1)
  if(payDay <= 0){
    payDay = 14
    setMoney( job.pay * job.hours * 10)
  }
  // timeTillNextHeater--
  // if( timeTillNextHeater < 1)
  //   pushEvent()
  updateCurrentEvent()
}
var moneyCheck  = null;
function phaseTwoManager(){
    if (document.getElementById("box1").checked){
      //family time: add happiness (check for family)
    }
    if(document.getElementById("box2").checked){
      //pay insurance
      setMoney(-120);
    }
    if(document.getElementById("box3").checked){
      //Pay taxes
      setMoney( -120);
    }
    if(document.getElementById("box4").checked){
      //Buy cheap food
      setMoney(-5);
      setHealth(-5);
      setFood(10)
    }
    if(document.getElementById("box5").checked){
      //buy healthy food
      setFood(5)
      setMoney(-10);
      setHealth(5);
    }
    if (getMoney() <= 0)
      /* Have a game over */;
    nextEvent();

}
