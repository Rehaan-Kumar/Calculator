function display(x) {
    var check = "true";
    var value = document.getElementById(x).value;
    if (check = "true") {
        document.getElementById("display").value += value;
    }
}

function clear() {
    document.getElementById("display").value = "";
}

function calculate() {
    var get_value = document.getElementById("display").value;
    var result = eval(get_value);
    document.getElementById("display").value = result;
}