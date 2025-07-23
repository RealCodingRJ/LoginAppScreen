var button = document.getElementById("button");
function getCompleteFunction() {
    var input = document.getElementById("input");
    var input1 = document.getElementById("input1");
    var value = input.value;
    if (input.value == "Payment") {
        input.style.display = "none";
        input1.style.display = "block";
        button.style.width = "490px";
        button.style.padding = "10px";
        button.style.marginTop = "20px";
        button.style.borderRadius = "15px";
        input.value = "";
        input1.value = "";
    }
}
button.addEventListener("click", getCompleteFunction);
getCompleteFunction();
