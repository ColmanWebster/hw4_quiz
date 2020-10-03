
var display = document.querySelector('#display');
var prompts = document.querySelector('#prompts');
var start =   document.querySelector('#start');
var press = 0;
var int;
var pausetime;

pausetime = 120;
display.value = pausetime;

start.addEventListener('click', function(event){
    if (event.target.matches('#start') && press == 0){
        
        function Timer(){
            display.value = pausetime;
            int = setInterval(Time1, 1000);
     
        };
        function Time1(){
            
            display.value -= 1;          
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
    }
});
