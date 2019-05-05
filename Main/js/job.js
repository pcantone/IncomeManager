var potentialJobs = {'Carlift': new job("Carlift",10,8,2), 'Server':new job("Server",8,8,1)
    , 'Warehouse Worker':new job("Warehouse Worker",10,8,1), 'Janitor':new job("Janitor",10,10,2)
    , 'Busperson':new job("Busperson",5,6,1), 'Cook':new job("Cook",9,7,3)
    , 'Internship':new job("Internship",10,8,3), 'Cashier':new job("Cashier",8,8,2)
    , 'Security':new job("Security",8,12,1), 'Retail':new job("Retail",8,8,2)
    , 'Delivery':new job("Delivery",5,8,2), 'Barista':new job("Barista",7,8,1)};
function job(n,p,t,l){
    this.name = n;
    this.pay = p;
    this.hours = t;
    this.toll = ["Blue Collar","White Collar"];
    this.jobLevel = l;
    this.jobstrikes = 3;
}

function getPay(){
    return job.pay();
}
function getJob(){
    return job.name();
}
function getHours(){
    return job.hours();
}
function getToll(i){
    return job.toll[i];
}
function getEducationNeeded(i){
    return job.educationNeeded[i];
}
function getJobLevel(i){
    return job.jobLevel();
}
function getJobStrikes(){
    return job.jobstrikes();
}
function getStrike(){
    job.jobstrikes() = job.jobstrikes() - 1;
}
