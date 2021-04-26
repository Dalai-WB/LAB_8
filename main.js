var i = 0;
var second;
var lives = 5;
var a = ["5*5=", "27+15=", "72/2=", "45/5=", "12*4="];
var b = [25, 42, 36, 9, 48];

function buttonPressed() {
    seconds(0);
    var container = document.getElementById("answer");
    var inputVal = parseInt(container.value);
    if (inputVal != b[i])
        lives--;
    i++;
    start();
}
function seconds(a) {
    var k = parseInt(a);
    if (k == 1) {
        var timeleft = 10;
        second = setInterval(function () {
            timeleft--;
            document.getElementById("second").textContent = timeleft + " секундэд хариулна уу.";
            if (timeleft <= 0) {
                clearInterval(second);
                nonButtonPressed();
            }
        }, 1000);
    }
    else
        clearInterval(second);
}


function start() {
    seconds(1);
    var question = document.getElementById("question");
    question.innerHTML = showQuestion(i);
    var live = document.getElementById("lives");
    if (lives >= 0)
        live.innerHTML = "Танд " + lives + " амь байна.";

    if (i == 5)
        end();
    var checkbutton = document.getElementById("checkButton");
    checkbutton.addEventListener("click", buttonPressed, false);

}
function showQuestion(i) {
    if (i < 5)
        return a[i];
    else
        return "  "
}


function nonButtonPressed() {
    i++
    lives--;
    start();
}



function end() {
    seconds(0);
    var end = document.getElementById("end");
    end.innerHTML = "Тоглоом дууслаа";
    var result = document.getElementById("result");
    if (lives > 0)
        result.innerHTML = "Та хожлоо";
    else
        result.innerHTML = "Та хожигдлоо";
    window.stop();

}

window.addEventListener("load", start, false);