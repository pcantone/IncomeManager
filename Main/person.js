

function person(n,f,p,m){
    this.name = n;
    this.potentialJobs = ['carlift', 'Server', 'Warehouse Worker'
    , 'Janitor', 'Busperson', 'Cook', 'Internship', 'Cashier'
    , 'Security', 'Retail', 'Delivery', 'Barista'];
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