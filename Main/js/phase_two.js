
/* Person Attribute Class */
function phaseTwo(p,j){
    this.person = p;
    this.job = j;
    this.health = 100;
    this.money = 100;
    this.hunger = 100;
    this.happiness = 100;
}

/* Getter Functions*/
function getHealth(){
    return phaseTwo.health();
}
function getMoney(){
    return phaseTwo.money();
}
function getHunger(){
    return phaseTwo.hunger();
}
function getHappyness(){
    return phaseTwo.happiness();
}
function getName(){
    return phaseTwo.name();
}

/* Setter Functions */
function setHealth(num){
    return phaseTwo.health() + num;
}
function setMoney(num){
    return phaseTwo.money() + num;
}
function setHunger(num){
    return phaseTwo.hunger + num;
}
function setHappyness(num){
    return phaseTwo.happiness() + num;
}
