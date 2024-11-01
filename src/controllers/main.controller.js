import { Job } from "../models/Job.model.js";

export function getHomePage(req, res)
{
    res.render("home");
}

export function getJobsListPage(req, res)
{
    const jobsList = Job.getJobsList();
    res.render("jobs-list", {jobsList});
}

export function getParticularJobDetails(req, res)
{
    const job = Job.getJobById(req.params.id);
    res.render('job-details', {job})
}