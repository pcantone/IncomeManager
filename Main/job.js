
function job(n,p,t){
    this.name = n;
    this.pay = p;
    this.hours = t;
    this.toll = ["Blue Collar","White Collar"];
    this.jobLevel = ['1','2','3'];
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
    return job.jobLevel[i];
}
function getJobStrikes(){
    return job.jobstrikes();
}
function getStrike(){
    job.jobstrikes() = job.jobstrikes() - 1;
}
