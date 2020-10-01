/* VARIABLES */
var start   = document.getElementById("start");
var display = document.getElementById("display");
    /* quiz questions */
    /* quiz answers */     /* possibly an array within an array? */

/* FUNCTIONS */

    /* timer function */
    /* increment counter? */

/* SCRIPT */

    start.addEventListener('click', Timer);

    function Timer(){
        setInterval(Time1, 2000);
        start.remove();
    }

    function Time1(){
        display.value = "Two-Second Timer";
    }
