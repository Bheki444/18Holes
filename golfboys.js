const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

var i = 0;
var txt = 'I fell in love with the sport at the age of 7. My dad bought my very first set of junior clubs, tucked in a bright yellow bag. Every Saturday morning I would wake up bright and early, put on my gear and make my way to the driving range. I had a coach, and we\'d master different swing variations and prepare for what is expected on the course. As I developed as a player, I played many golf courses around the country, and even one overseas. I don\'t play golf to compete, and I don\'t play to have a perfect score. I play because it brings me peace. The sport teaches me patience and persistence. Golf is a single player game. So is life. There is no teammate to pull your weight. You can only depend on your own performance. With that said, regardless of how a player performs on one hole, he must forget about it and focus on the next. Yet another life principle that this beautiful game has taught me. I take all the things I learn on the course and apply them throughout my daily life. As I grow as a player, I grow as a person.';
var speed = 40;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("liveType").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        document.getElementById("liveType").innerHTML += '<span class="cursor">|</span>';
        blinkCursor();
    }
}

function blinkCursor() {
    var cursor = document.querySelector('.cursor');
    if (cursor) {
        cursor.style.visibility = (cursor.style.visibility === 'hidden') ? 'visible' : 'hidden';
        setTimeout(blinkCursor, 500);
    }
}

window.onload = function() {
    typeWriter();
}

window.addEventListener('scroll', function() {
    var footer = document.getElementById('footer');
    var scrollPosition = window.innerHeight + window.scrollY;
    var pageHeight = document.body.offsetHeight;

    if (scrollPosition >= pageHeight) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
});

 