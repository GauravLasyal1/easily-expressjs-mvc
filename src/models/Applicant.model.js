export class Applicant
{
    constructor(name, email, contact, resumePath,jobId)
    {
        this.id = applicant_id_avail++;
        this.name = name;
        this.email = email;
        this.contact = contact;
        this.resumePath = resumePath;
        this.jobId = jobId; //job to which candidate is applying
    }
    //resume upload will be added later!
    static addApplicant(name, email, contact, resumePath,jobId)
    {
        applicantsList.push(new Applicant(name,email,contact,null,jobId));
    }
}

let applicant_id_avail = 1;

const applicantsList = [];