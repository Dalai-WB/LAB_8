function pressButton() {
    var cont = document.getElementById("date");
    var value = parseInt(cont.value);
    var cont1 = document.getElementById("register");
    var value1 = parseInt(cont1.value);
    var result = document.getElementById("result");
    value1 = parseInt(value1 / 1000000);
    value = value % 100;
    if (value != value1)
        result.innerHTML = "Үнэн зөв бөглөнө үү!";
    else
        document.writeln("Үнэн зөв бөглөсөнд баярлалаа.")
}

function ehlel() {
    var checkButton = document.getElementById("checkButton");
    checkButton.addEventListener("click", pressButton, false);
}
window.addEventListener("load", ehlel, false);
function reload() {

}