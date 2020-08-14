// Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

tl.fromTo(
    hero,
    1, 
    {height: "0%"},
     {height: "80%", ease: Power2.easeInOut}
).fromTo(
    hero, 
    1.2, 
    {width: '100%'}, {width: '80%', ease: Power2.easeInOut}
)
.fromTo(
    slider,
    1.2, 
    {x: "-100%"}, 
    {x: '0%', ease: Power2.easeInOut},
     "-=1.2"
     )
.fromTo(
    logo,
    0.5,
    {opacity: 0, x: 30},
    {opacity: 1, x: 0},
    "-=0.5"
)
.fromTo(
    hamburger,
    0.5,
    {opacity: 0, x: 30},
    {opacity: 1, x: 0},
    "-=0.5"
)