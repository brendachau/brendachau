window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
      header.classList.add('navbar-scrolled');
    }
    /* makes solid background disappear when scrolled back up */
    else if (window.scrollY < 56) {
      header.classList.remove('navbar-scrolled');
    }
  })

// drop down menu open
function contact() {
  document.getElementById("dropdownInfo").classList.toggle("show");
}
//drop down menu close
window.onclick = function(event) {
  if (!event.target.matches('#contact')) {
    var dropdown = document.getElementsByClassName("dropdownInfo");
    var i;
    for (i = 0; i < dropdown.length; i++) {
      var openDropdown = dropdown[i];
      if (openDropdown.classList.contains('show')) {
        if (openDropdown.classList.remove('show'));
      }
    }
  }
}


// parallax zoom in 
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  $(".zoom img").css({
    width: (100 + scroll/5) + "%"
  })
});


// animation
let sections = document.querySelectorAll('section');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add('show-animate');
    }
    else {
      sec.classList.remove('show-animate');
    }
  })
}


// change title intro 
var typed = new Typed(".input", {
  strings:["Brenda Chau.", "a Front-End Developer."],
  typeSpeed: 75,
  backSpeed: 60,
  loop: true
});


// fade in/out title intro
$(window).scroll(function() {
  $(".animate").css("opacity", 1 - $(window).scrollTop() / 300);
});


// nutrifitworld button
function redirect() {
  window.location.href = "NutriFitWorld/home.html";
}
function redirect2() {
  ;window.location.href = "https://www.nutrifitworld.com";
}

//square button 
$(".square3").click(function() {
  document.getElementsById(".dropdownSquare").style.display = "block";
})

// reveal on scroll 
window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++) {

    var windowheight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if(revealTop < windowheight - revealPoint) {
      reveals[i].classList.add('active');
    }
    else {
      reveals[i].classList.remove('active');
    }
  }
}


window.alert("Please view this page in desktop full screen. -Brenda");
