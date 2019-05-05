
var persons = {"Johnny":new person("Johnny",6,8)}

function person(n,p,m){
    this.name = n;
    this.family = [];
    this.physicalTolerance = p;
    this.mentalTolerance = m; 
}

function getName(){
    return person.name();
}
function getPotentialJob(i){
    return person.potentialJobs[i];
}
function getFamily(i){
    return person.getfamily[i];
}
function getPhysicalTolerance(){
    return person.physicalTolerance();
}
function getMentalTolerance(){
    return person.mentalTolerance();
}
