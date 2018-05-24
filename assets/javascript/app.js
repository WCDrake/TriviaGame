/* When the clock runs out the scores are not calculated */
//When the clock runs out, the gif repeats 




var timeCount = 30;
var correct = 0;
var incorrect = 0;
var unanswered = 0;




$('#noPass').hide();
$('#done').hide();

$('.questionsAndTimer').hide();
$('.endScreen').hide();

$(".startGame").on("click", function () {
    $(".questionsAndTimer").show();

    $(this).hide();
    clock();
});



function clock() {
    time = setInterval(thirty, 1000);
    $(".timer").html("Time Left: <br>" + timeCount)


    function thirty() {
        if (timeCount === 0) {
            /* I need something here */
            endScreen();

        }

        else {
            timeCount--;
        }
        $(".timer").html("Time Left: <br>" + timeCount)
    }
}
/* Questions Go Here */

$(".submit").click(function  () {
   
    var answer1 = document.getElementById("111").checked;
    var answer2 = document.getElementById("65").checked;
    var answer3 = document.getElementById("87").checked;

    if (answer1===true){
        correct++;
    } else if (answer2===true || answer3===true) {
        incorrect++;
    } else {
        unanswered++;
    }

    var answer4 = document.getElementById("Frodo").checked;
    var answer5 = document.getElementById("Boromir").checked;
    var answer6 = document.getElementById("Legolas").checked;

    if (answer4===true){
        correct++;
    } else if (answer5===true || answer6===true) {
        incorrect++;
    } else {
        unanswered++;
    }

    var answer7 = document.getElementById("super").checked;
    var answer8 = document.getElementById("way").checked;
    var answer9 = document.getElementById("totally").checked;

    if (answer8===true){
        correct++;
    } else if (answer7===true || answer9===true) {
        incorrect++;
    } else {
        unanswered++;
    }
    endScreen();

});










/* end screen */

function endScreen() {
    $('.questionsAndTimer').hide();

    if (correct > 1){

        $('#done').show();
        
        setTimeout(function() {
            $('#done').hide();
        },2000);


    } else {
        $('#noPass').show();
        setTimeout(function() {
            $('#noPass').hide();
        },3000);


    }
  

    $('.endScreen').show();
    $("#correct").html("Correct Answers: " + correct);
    $("#incorrect").html("Incorrect Answers: " + incorrect);
    $("#unanswered").html("Unanswered: " + unanswered);

}

$(".restart").click(function () {
    $('.endScreen').hide();
    $(".startGame").show();
    $('#noPass').hide();
    $('#done').hide();
    reset();


});

function reset() {
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    timeCount = 30;
    clearInterval(time);
   document.getElementById("111").checked = false;
   document.getElementById("65").checked = false;
   document.getElementById("87").checked = false;
   document.getElementById("Frodo").checked = false;
   document.getElementById("Boromir").checked = false;
   document.getElementById("Legolas").checked = false;
   document.getElementById("super").checked = false;
   document.getElementById("way").checked = false;
   document.getElementById("totally").checked = false;

}