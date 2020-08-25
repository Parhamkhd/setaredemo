var countDownDate1 = new Date("Aug 30, 2020 11:20:25").getTime();

var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate1 - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.querySelector("div#seconds1.timebox").innerHTML = seconds;
    document.querySelector("div#minutes1.timebox").innerHTML = minutes;
    document.querySelector("div#hours1.timebox").innerHTML = hours;
    document.querySelector("div#days1.timebox").innerHTML = days;

    // If the count down is over, write some text 
    // if (distance < 0) {
    //   clearInterval(x);
    //   document.getElementById("demo").innerHTML = "EXPIRED";
    // }
}, 1000);
