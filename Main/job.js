
function job(n,p,t){
    this.name = n;
    this.pay = p;
    this.hours = t;
    this.toll = ["Blue Collar","White Collar"];
    this.educationNeeded = ["None", "High School Diploma", "College Degree"];
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
