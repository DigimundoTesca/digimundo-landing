// Change background color for navbar
$(document).scroll(function(){
  if($(this).scrollTop() > 100) {   
    $('#navbar-main').css({"background-color":"rgba(0,0,0,0.8)"});
  } else {
    $('#navbar-main').css({"background-color":"transparent"});
  }
});
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function showMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// Prevent projects square redirect
$("#projects-squares a").click(function(event){
  event.preventDefault();
});
$("#team a").click(function(event){
  event.preventDefault();
});

// Smooth scroll for menu anchors
// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
// On-page links
if (
  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
  && 
  location.hostname == this.hostname
  ) {
// Figure out element to scroll to
var target = $(this.hash);
var navHeight = $('#navbar-main').height();
var scrollToPosition = target.offset().top - (navHeight);
target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
// Does a scroll target exist?
if (target.length) {
// Only prevent default if animation is actually gonna happen
event.preventDefault();
$('html, body').animate({
  scrollTop: scrollToPosition
}, 1500, function() {
// Callback after animation
// Must change focus!
var $target = $(target);
$target.focus();
if ($target.is(":focus")) { // Checking if the target was focused
  return false;
} else {
$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
$target.focus(); // Set focus again
};
});
}
}
});