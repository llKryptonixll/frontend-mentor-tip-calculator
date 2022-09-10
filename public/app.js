const billInput = document.getElementById("bill-value");
const peopleInput = document.getElementById("people-count");
const tipInput = document.getElementById("tip-amount");
const tipBtns = document.querySelectorAll(".tip-button");
const tipAmountContainer = document.getElementById("tip-amount-container");
const totalContainer = document.getElementById("total-container");
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
});

tipInput.value = 0;
peopleInput.value = 1;

function calculation () {
    // calc tip amount
    const tipResult = (billInput.value / peopleInput.value) * (tipInput.value / 100);
    tipAmountContainer.innerHTML = "$"+Math.round(tipResult * 100) / 100;

    // calc total
    const totalResult = (billInput.value / peopleInput.value) + tipResult;
    totalContainer.innerHTML = "$"+Math.round(totalResult * 100) / 100;
}

tipBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        tipInput.value = parseFloat(btn.innerHTML);
        calculation();
    });
});

peopleInput.addEventListener("input", () => {
    calculation();

    const errorMessage = document.getElementById("error-message");
    if(peopleInput.value <= 0){
        // remove NaN or infinite in result container
        tipAmountContainer.innerHTML = "$0.00";
        totalContainer.innerHTML = "$0.00";

        // show error message 
        errorMessage.classList.add("grid");
        errorMessage.classList.remove("hidden");

        // change input outlinde color when error
        peopleInput.classList.remove("outline-strong-cyan");
        peopleInput.classList.add("outline-input-error-color");
    }
    else{
        // set back to default if no error
        errorMessage.classList.remove("grid");
        errorMessage.classList.add("hidden");

        peopleInput.classList.add("outline-strong-cyan");
        peopleInput.classList.remove("outline-input-error-color");
    }
});

billInput.addEventListener("input", () => {
    calculation();
});

// reset btn function
const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", () => {
    tipAmountContainer.innerHTML = "$0.00";
    totalContainer.innerHTML = "$0.00";
    tipInput.value = "";
    billInput.value = "";
    peopleInput.value = 1;
});