const button = document.getElementById("button") as HTMLButtonElement;

function getCompleteFunction() {
  const input = document.getElementById("input") as HTMLInputElement;
  const input1 = document.getElementById("input1") as HTMLInputElement;

  let value = input.value;

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
