const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
const images = require('./database/data');
const course = require('./database/course');
const chats = require('./database/placement');
const cordi = require('./database/coordi');
const secy = require('./database/secretary');
const alumni = require('./database/alumni');
const faculty = require('./database/faculty');
const award = require('./database/achievement')

const PORT=process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render('index', { title: "Home" });
});

app.get('/about', (req, res) => {
    res.render('about', { title: "About-us" });
});

app.get('/activities', function (req, res) {
    res.render("activities", { images: images, title: "Activities" });
})
app.get('/department', function (req, res) {
    res.render("department", { title: "Department",alumni : alumni,faculty: faculty , award:award});
})
app.get('/student-section', function (req, res) {
    res.render('student-section', { course: course, chats: chats, title: "Student-section" });
})
app.get('/teams', function (req, res) {
    res.render('teams', { cordi: cordi, secy: secy, title: "Teams" });
})

app.get('/:name',(req,res)=>{
    res.render('post',{name:req.params.name});
})
app.listen(PORT, () => {
    console.log("server started on port 3000");
});
