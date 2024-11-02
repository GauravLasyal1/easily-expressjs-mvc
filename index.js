import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";
import session from "express-session";

import { auth } from "./src/middlewares/authentication.middleware.js";
import { getHomePage } from "./src/controllers/main.controller.js";
import { getJobsListPage } from "./src/controllers/main.controller.js";
import { getParticularJobDetails } from "./src/controllers/main.controller.js";
import { getLoginPage } from "./src/controllers/main.controller.js";
import { getRegisterPage } from "./src/controllers/main.controller.js";
import { registerUser } from "./src/controllers/main.controller.js";
import { loginUser } from "./src/controllers/main.controller.js";
import { logout } from "./src/controllers/main.controller.js";
import { getApplyJobPage } from "./src/controllers/main.controller.js";
import { applyForJob } from "./src/controllers/main.controller.js";
import { getNewJobPage } from "./src/controllers/main.controller.js";
import { postNewJob } from "./src/controllers/main.controller.js";

const server = express();


server.set("view engine", "ejs");
server.set("views", path.resolve("src", "views"));


server.use(expressEjsLayouts);
server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));
server.use(
  session({
    secret: "Metamorphosis",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);


server.get("/", getHomePage);

server.get("/jobs", getJobsListPage)

server.get("/job/:id", getParticularJobDetails);

server.get("/login", getLoginPage);
server.post("/login",loginUser); //

server.get("/register", getRegisterPage);
server.post("/register",registerUser);

server.get("/logout",logout);

server.get('/apply/:id', getApplyJobPage);
server.post('/apply/:id', applyForJob);

server.get("/newjob", auth,getNewJobPage);
server.post("/newjob",auth,postNewJob);

server.listen(3000, () => {
    console.log("Server is listening at port 3000...");
});