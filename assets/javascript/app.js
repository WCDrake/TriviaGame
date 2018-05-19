/*When the game resets, the timer increases. It also starts a few seconds in */
var timeCount = 30;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

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
            endScreen();

        }

        else {
            timeCount--;
        }
        $(".timer").html("Time Left: <br>" + timeCount)
    }
}
/* Questions Go Here */






$(".submit").click(function () {
    endScreen();
});


/* end screen */
function endScreen() {

    $('.questionsAndTimer').hide();
    $('.endScreen').show();
    $("#correct").html("Correct Answers: " + correct);
    $("#incorrect").html("Incorrect Answers: " + incorrect);
    $("#unanswered").html("Unanswered: " + unanswered);

}

$(".restart").click(function () {
    $('.endScreen').hide();
    $(".startGame").show();
    reset();


});

function reset() {
    correct = 0;
    incorrect = 0;
    unanswered = 0;
    timeCount = 30;
}

/*

if (correct < 60%){
    write: YOU SHALL NOT PASS
    Maybe even due a gif 
}

*/