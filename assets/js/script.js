// <!-- Début partie Mickael -->
function openfolder() {
  var a;
  a = document.getElementById("div1");
  a.innerHTML = "&#xf114;";
  setTimeout(function () {
    a.innerHTML = "&#xf115;";
  }, 1000);
}


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

// <!-- Fin partie Mickael -->
// <!-- Début partie Benoit -->

// <!-- Fin partie Benoit -->
// <!-- Début partie Fa -->

// <!-- Fin partie Fa -->
// <!-- Début partie Khoursa-->

// <!-- Fin partie Khoursa -->
