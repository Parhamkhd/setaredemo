var countDownDate = new Date("Aug 27, 2020 15:37:25").getTime();

var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    document.querySelector("div#seconds.timebox").innerHTML = seconds;
    document.querySelector("div#minutes.timebox").innerHTML = minutes;
    document.querySelector("div#hours.timebox").innerHTML = hours;
    document.querySelector("div#days.timebox").innerHTML = days;
      
    // If the count down is over, write some text 
    // if (distance < 0) {
    //   clearInterval(x);
    //   document.getElementById("demo").innerHTML = "EXPIRED";
    // }
  }, 1000);

