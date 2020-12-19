const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.links');
    const navLinks = document.querySelectorAll('.links li');



    burger.addEventListener('click', () => {
        //active navbar
        nav.classList.toggle('nav-active');
        //Animation for links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //burger
        burger.classList.toggle('toggle');
    });
}

navSlide();


//game//
// Set the score to 0 when the page loads
var score = 0
    //function for adding points to the score
function addScore() {
    score += 1;
    document.getElementById("score").innerHTML = score;
    console.log("BUTTON WAS CLICKED")
}
//function for refreshing the page when the game ends
function refreshPage() {
    console.log("refresh now!")
    location = location;
}
//main countdown function
function countDown() {
    //grab a random int between 5 and 10 seconds
    var randomInt = Math.random() * 11000 + 5000;
    //grab the current time and date in seconds
    var start = new Date().getTime();
    //time to react is current date and time + the random int
    var finish = start + randomInt;
    //var function to add a "too late!" function 1 second later
    var endReaction = (finish + 1000);
    //when function is called, let the timer show that to wait to click
    document.getElementById("demo").innerHTML = ("Wait For it...");
    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();


        // Find the distance between now and the reaction time.
        var distance = now;

        // Time calculations for days, hours, minutes and seconds
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"

        document.getElementById("score").innerHTML = score;
        // If the count down is over, write some text 
        if (now > finish && now < endReaction) {
            document.getElementById("demo").innerHTML = "Your score is!";
            document.getElementById("visibleButton").style.margin = "0 auto";
            document.getElementById("visibleButton").style.display = "block";
            document.getElementById("visibleButton").style.opacity = "1";
            fail = 0;
        }
        //If 1 second passes, change the function of "start game" to refresh page function, and print "too late!"
        else if (now > endReaction) {

            document.getElementById("visibleButton").style.opacity = "0";
            document.getElementById("visibleButton").style.float = "left";
            document.getElementById("gameStart").setAttribute("onClick", "javascript: refreshPage();");
            document.getElementById("gameStart").setAttribute("value", "Start Again?");
        }




    }, 1000);

}