//buttons to redirect to new page
function book2() {
  window.location = "contact.html";
}

function learnmore() {
  window.location = "aboutus.html";
}

/* image gallery slider */
var slider_img = document.querySelector('.slider-img');
var images = ['story1.jpg', 'story2.jpg', 'story3.jpg', 'story4.jpg', 'story5.jpg', 'story6.jpg', 'story7.jpg', 'story8.jpg', 'story9.jpg', 'story10.jpg', 'story11.jpg'];

var i = 0;

function prev() {
  if(i <= 0) i = images.length;
    i--;
    return setImg();
}

function next() {
  if(i >= images.length - 1) i = -1;
  i++;
  return setImg();
}

function setImg() {
  return slider_img.setAttribute('src', 'images/' + images[i]);
}

/* nav bar scroll transition */
const navbar = document.querySelector('.nav');
 
/* makes solid background when scrolling down */
window.addEventListener('scroll', () => {
  if (window.scrollY >= 56) {
    navbar.classList.add('navbar-scrolled');
  }
  /* makes solid background disappear when scrolled back up */
  else if (window.scrollY < 56) {
    navbar.classList.remove('navbar-scrolled');
  }
})

/* form submit message */
function contactform() {
  alert("Message sent! Thanks for contacting. :)");
}
// newsletter form alert and red error box
function newsletterform() {
  if (document.getElementById('email').value == "") {
    event.preventDefault();
    alert("Please enter your email");
    document.getElementById('email').style.borderColor = "red";
  }
  else {
    alert("You're subscribed!");
  }
}

