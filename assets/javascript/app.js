/*
1) Transition to end screen
2) Transition back
Just do the transitions
Questions on the back
    - there will be an easy fix
*/
var timeCount= 30;
var correct= 0;
var wrong = 0;




$('.questionsAndTimer').hide();


$(".startGame").on("click", function (){
           $(".questionsAndTimer").show();
            console.log("does the button work?");
    
            $(this).hide();
            clock(); 
        });

        function clock() {
            time = setInterval(thirty, 1000);
            $(".timer").html("Time Left: <br>" + timeCount)

        
            function thirty() {
                if (timeCount === 0) {
                    timeDone();

                }

                else {
                    timeCount--;
                }
                $(".timer").html("Time Left: <br>" + timeCount)
            }
        }

// I need to be able to have questions and shit
//I need to be able to log right and wrong
// I need an end screen
// I need a button at the end to reset


function timeDone (){
    
    $('.questionsAndTimer').hide();
    //show end screen
}

function reset() {
    correct= 0;
    wrong= 0
    timeCount= 30;
}