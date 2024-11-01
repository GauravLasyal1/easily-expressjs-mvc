export class Job
{
    constructor(category,designation,location,companyName,salary,applyBy,skillsRequired,noOfOpenings,jobPosted,applicants,userId)
    {
        this.id = job_id_avail++;
        this.category = category;
        this.designation = designation;
        this.location = location;
        this.companyName = companyName;
        this.salary = salary;
        this.applyBy = applyBy;
        this.skillsRequired = skillsRequired;
        this.noOfOpenings = noOfOpenings;
        this.jobPosted = jobPosted;
        this.applicants = applicants;
        this.userId = userId; //jobs posted by user
    }
    static getJobsList()
    {
        return jobsList;
    }
    static getJobById(id)
    {
        return jobsList.find((job) => {
            return job.id == id;
        });
    }
}

let job_id_avail = 1;

const jobsList = [
    new Job("Web Developer", "SDE1", "Delhi", "CodingNinjas Inc", "3.5LPA", "31/Oct/2024", ["HTML", "CSS", "JS", "ReactJs"], 4, "01/Oct/2024", 0, 1),
    new Job("Android Developer","SWE","Mohali","ABC Inc","6LPA","01/Dec/24",["Java","Flutter","React Native"],5,"01/Oct/2024",0,2)
];