
    // -----------------------navigation bar-------------------------------
    
    var navLinks = document.getElementById("nav-links");
    function showMenu() {
        navLinks.style.right = "0";
    }
    function hideMenu() {
        navLinks.style.right = "-75vw";
    }

    var funs = document.getElementById("fun_events");
    function fun() {

        funs.style.display = "block";
        var temp = document.getElementById("activities");
        funs.scrollIntoView();


    }

// -----------------------------activities page-----------------------------------
    var temp = document.getElementById("activities");
    function upArrow() {
        funs.style.display = "none";
        temp.scrollIntoView();
    }

    var mag = document.getElementById("strength");
    function strength() {
        mag.style.display = "block";
        mag.scrollIntoView();
    }

    var lamba=document.getElementById("talks");
    function talks(){
        lamba.style.display="block";
        lamba.scrollIntoView();
    } 

    function upTalks(){
        lamba.style.display="none";
        document.getElementById("activities").scrollIntoView();

    }


    var stre = document.getElementById("activities");
    function upStrength() {
        mag.style.display = "none";
        stre.scrollIntoView();
    }
// =====================================department page====================================
    var dep=document.getElementById("department");
    function departmental(){
        dep.style.display="block";
        dep.scrollIntoView();
    }
    var de=document.getElementById("activities");
    function upDepartment(){
        dep.style.display="none";
        de.scrollIntoView();

    }
    var aw=document.getElementById('achievements');
    function awards(){
        aw.style.display="block";
        aw.scrollIntoView();
    }
    function upAchievements(){
        aw.style.display="none";
        document.getElementById('department').scrollIntoView();
    }

    var fa=document.getElementById('faculties');
    function faculty(){
        fa.style.display="block";
        fa.scrollIntoView();
    }
    function upFaculty(){
        fa.style.display="none";
        document.getElementById('department').scrollIntoView();
    }
    var al=document.getElementById('alumnus');
    function alumni(){
        al.style.display="block";
        al.scrollIntoView();
    }
    function upAlumnus(){
        al.style.display="none";
        document.getElementById('department').scrollIntoView();
    }

    var res=document.getElementById('researches');
    function patent(){
        res.style.display="block";
        res.scrollIntoView();
    }
    function upResearch(){
        res.style.display="none";
        document.getElementById('department').scrollIntoView();
    }

    
// ==================================student's section=======================//

function resumes(){
    document.getElementById('resume').style.display="block";
    document.getElementById('resume').scrollIntoView();
}

function upResume(){
    document.getElementById('resume').style.display="none";
    document.getElementById('students').scrollIntoView();
}

function mates(){
    document.getElementById('branchmates').style.display="block";
    document.getElementById('branchmates').scrollIntoView();

}
function upBranch(){
    document.getElementById('branchmates').style.display="none";
    document.getElementById('students').scrollIntoView();
}

function courses(){
    document.getElementById('civil-courses').style.display="block";
    document.getElementById('civil-courses').scrollIntoView();
}

function upCourses(){
    document.getElementById('civil-courses').style.display="none";
    document.getElementById('students').scrollIntoView();
}
function postulates(){
    document.getElementById('placements').style.display="block";
    document.getElementById('placements').scrollIntoView();

}
function upPlacements(){
    document.getElementById('placements').style.display="none";
    document.getElementById('students').scrollIntoView();
}





// =================================slider in activities->departmental get-together====================
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += "active";
    }
