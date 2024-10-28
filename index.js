import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";


const server = express();

server.set("view engine", "ejs");
server.set("views", path.resolve("src", "views"));


server.use(expressEjsLayouts);
server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));

server.get("/", (req, res) => {
    res.render("home");
});

server.listen(3000, () => {
    console.log("Server is listening at port 3000...");
});