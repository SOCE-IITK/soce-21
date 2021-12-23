const express = require("express");
const app = express();
const path = require("path");
app.set("view engine", "ejs");
app.use(express.static("public"));
const images = require("./database/data");
const course = require("./database/course");
const chats = require("./database/placement");
const cordi = require("./database/coordi");
const secy = require("./database/secretary");
const alumni = require("./database/alumni");
const faculty = require("./database/faculty");
const award = require("./database/achievement");
const web = require("./database/web");
const cordi19 = require("./database/team20/cordi19");
const secy19 = require("./database/team20/secy19");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About-us",
  });
});

app.get("/activities", function (req, res) {
  res.render("activities", {
    images: images,
    title: "Activities",
  });
});
app.get("/department", function (req, res) {
  res.render("department", {
    title: "Department",
    alumni: alumni,
    faculty: faculty,
    award: award,
  });
});
app.get("/student-section", function (req, res) {
  res.render("student-section", {
    course: course,
    chats: chats,
    title: "Student-section",
  });
});
app.get("/teams", function (req, res) {
  res.render("teams", {
    cordi: cordi,
    secy: secy,
    web: web,
    title: "Teams",
  });
});

app.get("/team20", (req, res) => {
  res.render("teams20", {
    secy19: secy19,
    cordi19: cordi19,
    title: "Team 2020",
  });
});

app.get("/sitemap.xml", (req, res) => {
  res.contentType("application/xml");
  res.sendFile(path.join(__dirname, "sitemap.xml"));
});

app.get("/googlea473733a38625fec.html", (req, res) => {
  res.contentType("application/html");
  res.sendFile(path.join(__dirname, "googlea473733a38625fec.html"));
});
app.get("/:name", (req, res) => {
  var img;
  for (var i = 0; i < chats.length; i++) {
    if (chats[i].og == req.params.name) {
      img = chats[i].thumbnail;
      // console.log(img);
    }
    if (i >= chats.length) {
      img = "";
    }
  }
  // console.log(img);
  // console.log(req.params.name);
  res.render("post", {
    name: req.params.name,
    thumbnail: img,
  });
});

app.listen(PORT, () => {
  console.log("server started on port 3000");
});
