import { Job } from "../models/Job.model.js";
import { User } from "../models/User.model.js";

export function getHomePage(req, res)
{
    res.render("home",{isLoggedIn:req.session&&req.session.isLoggedIn});
}

export function getJobsListPage(req, res)
{
    const jobsList = Job.getJobsList();
    res.render("jobs-list", {jobsList,isLoggedIn:req.session&&req.session.isLoggedIn});
}

export function getParticularJobDetails(req, res)
{
    const job = Job.getJobById(req.params.id);
    res.render('job-details', {job,isLoggedIn:req.session&&req.session.isLoggedIn})
}

export function getLoginPage(req, res)
{
    res.render("login",{errorMessage:null,isLoggedIn:req.session&&req.session.isLoggedIn});
}

export function getRegisterPage(req, res)
{
    res.render("register", { isLoggedIn: req.session && req.session.isLoggedIn });
}

export function registerUser(req, res)
{
    const { userName, email, password } = req.body;
    User.addNewUser(userName, email, password);
    res.render("login", {errorMessage:null,isLoggedIn:req.session&&req.session.isLoggedIn});
}

export function loginUser(req, res)
{
    const { email, password } = req.body;
    if (User.isValidUser(email, password))
    {
        req.session.isLoggedIn = true;
        req.session.userId = User.getUserId(email, password);
        res.redirect("/jobs");
    }
    else
    {
        res.render("login",{errorMessage:"Invalid Username/Password!",isLoggedIn:req.session&&req.session.isLoggedIn});
    }
}

export function logout(req, res)
{
    req.session.destroy((err) => {
        if (err) console.log('Error while logging out!');
        else res.redirect('/')
    });
}