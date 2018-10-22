// <!-- Début partie Mickael -->
//bouton dossier
function openfolder() {
  var a;
  a = document.getElementById("div1");
  a.innerHTML = "&#xf114;";
  setTimeout(function () {
    a.innerHTML = "&#xf115;";
  }, 1000);
}
//horloge decompte
openfolder();
setInterval(openfolder, 2000);
var countDownDate = new Date("Jan 5, 2019 15:37:25").getTime();
// Update the count down every 1 second
var x = setInterval(function() {
  // Get todays date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
//slide
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 6000); // Change image every 3 seconds
}

$(function() {
 	$("#css3dimagePager li").click(function(){
		var rotateY = ($(this).index() * -90);
		$("#css3dimageslider ul").css({"-webkit-transform":"rotateY("+rotateY+"deg)", "-moz-transform":"rotateY("+rotateY+"deg)", "-ms-transform":"rotateY("+rotateY+"deg)", "transform":"rotateY("+rotateY+"deg)"});
		$("#css3dimagePager li").removeClass("active");
		$(this).addClass("active");
	});
 	$("#css3dtransparency").click(function() {
		$("#css3dimageslider").toggleClass("transparency");
		$(this).toggleClass("active");
	});
 });

  $(function() {
    $(".rslides").responsiveSlides();
  });
  $(".rslides").responsiveSlides({
    auto: true,             // Boolean: Animate automatically, true or false
    speed: 600,            // Integer: Speed of the transition, in milliseconds
    timeout: 6000,          // Integer: Time between slide transitions, in milliseconds
    pager: false,           // Boolean: Show pager, true or false
    nav: false,             // Boolean: Show navigation, true or false
    random: false,          // Boolean: Randomize the order of the slides, true or false
    pause: false,           // Boolean: Pause on hover, true or false
    pauseControls: true,    // Boolean: Pause when hovering controls, true or false
    prevText: "Previous",   // String: Text for the "previous" button
    nextText: "Next",       // String: Text for the "next" button
    maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
    navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
    manualControls: "",     // Selector: Declare custom pager navigation
    namespace: "rslides",   // String: Change the default namespace used
    before: function(){},   // Function: Before callback
    after: function(){}     // Function: After callback
  });




// <!-- Fin partie Mickael -->
// <!-- Début partie Benoit -->

// <!-- Fin partie Benoit -->
// <!-- Début partie Fa -->

// <!-- Fin partie Fa -->
// <!-- Début partie Khoursa-->

// <!-- Fin partie Khoursa -->
