function updateCaseNumber(isIncrease) {
    // get the value inside the number input field
    const caseNumberField = document.getElementById("case-number-field");
    // convert to an integer number
    const previousCaseNumber = parseInt(caseNumberField.value);
    // calculate the new case number
    let newCaseNumber;
    if (isIncrease) {
        newCaseNumber = previousCaseNumber + 1;
    } else {
        newCaseNumber = previousCaseNumber - 1;
    }
    // set the value to the case number field
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}


// step 1: add event listener to the case plus button
document.getElementById("btn-case-plus").addEventListener("click", function() {
    const newCaseNumber = updateCaseNumber(true);
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById("case-total");
    caseTotalElement.innerText = caseTotalPrice;
});

// step 2: add event listener to the case minus button
document.getElementById("btn-case-minus").addEventListener("click", function() {
    const newCaseNumber = updateCaseNumber(false);
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById("case-total");
    caseTotalElement.innerText = caseTotalPrice;
});

