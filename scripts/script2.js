
var display = document.querySelector('#display');
var prompts = document.querySelector('#prompts');
var start =   document.querySelector('#start');
var press = 0;
var int;
var pausetime;

pausetime = 10;
display.value = pausetime;

start.addEventListener('click', function(event){
    if (event.target.matches('#start') && press == 0){
        
        function Timer(){
            
            display.value = pausetime;
            int = setInterval(Time1, 1000);
            
        };
        function Time1(){
            if (display.value > 0){
            display.value -= 1;          
        } else{
            clearInterval(int);
            pausetime = 10;
            display.value = pausetime;
            start.textContent = "START";
            press = 0;
        }
        };
        Timer();
        
        press = 1;
        prompts.value = "Pause Value: " + press;
        start.textContent = "PAUSE";  
    } else if (event.target.matches('#start') && press == 1){
        clearInterval(int);
        pausetime = display.value;
        display.value = "PAUSED: " + pausetime;
        press = 0;
        prompts.value = "Pause Value: " + press;
        start.textContent = "START";
    } else if (pausetime >= 0){
        clearInterval(int);
    }
});

