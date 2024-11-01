class Applicant
{
    constructor(name, email, contact, resumePath)
    {
        this.id = applicant_id_avail++;
        this.name = name;
        this.email = email;
        this.contact = contact;
        this.resumePath = resumePath;
    }
}


let applicant_id_avail = 1;
