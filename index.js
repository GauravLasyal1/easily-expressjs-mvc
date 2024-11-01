import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";


import { getHomePage } from "./src/controllers/main.controller.js";
import { getJobsListPage } from "./src/controllers/main.controller.js";
import { getParticularJobDetails } from "./src/controllers/main.controller.js";

const server = express();

server.set("view engine", "ejs");
server.set("views", path.resolve("src", "views"));


server.use(expressEjsLayouts);
server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));


server.get("/", getHomePage);
server.get("/jobs", getJobsListPage)
server.get("/job/:id", getParticularJobDetails);


server.listen(3000, () => {
    console.log("Server is listening at port 3000...");
});