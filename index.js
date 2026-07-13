const express = require("express");
const path = require("path");

const app = express();

// Static Folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "about.html"));
});
app.get("/courses", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "courses.html"));
});

app.get("/admissions", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "admissions.html"));
});

app.get("/faculty", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "faculty.html"));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "contact.html"));
});