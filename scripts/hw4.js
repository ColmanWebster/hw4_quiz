

/* [0]  [1]  [2] */
var answerKey = ['4', '6', '11'];

var question1 = "question one?";          /* index [0] */
var question2 = "question two?";          /* index [1] */
var question3 = "question three?";        /* index [2] */

var questionsList = [question1, question2, question3];

var answers1 = ['1', '2', '3', '4'];      /* index [0] */
var answers2 = ['5', '6', '7', '8'];      /* index [1] */
var answers3 = ['9', '10', '11', '12'];   /* index [2] */

var answersList = [answers1, answers2, answers3];

var cont3 = document.querySelector('#cont3');
var display = document.querySelector('#display');
var prompts = document.querySelector('#prompts');
var start =   document.querySelector('#start');
var press = 0;
var int;
var pausetime;

var correct = 0;

if (localStorage.getItem('bank')){
    var bank = JSON.parse(localStorage.getItem('bank'));
}else{
    var bank = [];
}

pausetime = 120;

prompts.value = pausetime;

start.addEventListener('click', function(event){
    if (event.target.matches('#start') && press == 0){
        
        function Timer(){
            
            prompts.value = pausetime;
            int = setInterval(Time1, 1000);
            
        };
        function Time1(){
            if (prompts.value > 0){
            prompts.value -= 1;
                    
        } else{
            
            clearInterval(int);
            /* pausetime = 10; */
            /* prompts.value = pausetime; */
            start.textContent = "START";
            press = 0;
            correct = correct + pausetime;
            document.write("you dudn't dooit. score: " + correct);
        }
        };
        Timer();
        
        press = 1;
        
        start.textContent = "PAUSE";  
    } else if (event.target.matches('#start') && press == 1){
        clearInterval(int);
        pausetime = prompts.value;
        prompts.value = "PAUSED: " + pausetime;
        press = 0;
        
        start.textContent = "START";
    } else if (pausetime >= 0){
        clearInterval(int);
    }
});

var b = 0;

start.addEventListener('click', function(){
    
    display.value = questionsList[b];
    Loop();
    
    cont3.addEventListener('click', function(event){

    if (event.target.matches('.button') && event.target.textContent == answerKey[b]){
        alert('CORRECT');
        if (b == 3){
            b = 0;
        }
        b++;
        correct ++;


        if (correct == 3 ){

            clearInterval(int);
    
            alert('YOU DUD A BIGLY WINNING')

            bank.push('<button>'+ prompt('ENTER YOUR INITIALS: ') + correct + '</button></br>'); 
            if(bank.length > 5){
            bank.shift();
            };
            var bank2 = JSON.stringify(bank);
            localStorage.setItem('bank', bank2);
            bank3 =JSON.parse(localStorage.getItem('bank'));
            /* $('#cont').html(bank2); */

            $('body').html(bank3);
            
        }

        Loop();
        display.value = questionsList[b];
        
    
    } else if (event.target.matches('.button') && event.target.textContent != answerKey[b]){
        b++;
        pausetime-=10 ;
        
        correct --;
        
        prompts.value = pausetime;
        
        if (b <= 3){
        display.value = questionsList[b];
        };

        
        
        if (b == 3){
            
            clearInterval(int);
    
            alert('YOU FINISHED');

            bank.push('<button>'+ prompt('ENTER YOUR INITIALS: ') + correct + '</button></br>'); 
            if(bank.length > 5){
            bank.shift();
            };
            var bank2 = JSON.stringify(bank);
            localStorage.setItem('bank', bank2);
            bank3 =JSON.parse(localStorage.getItem('bank'));
            /* $('#cont').html(bank2); */

            $('body').html(bank3);

            Loop();
        };
    };
});

});

function Loop(){

    for (j = 0; j < answersList[b].length; j++){
        document.getElementsByClassName('button')[j].textContent = answersList[b][j];

        
    
    }
}

