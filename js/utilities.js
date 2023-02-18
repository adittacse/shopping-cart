function setTextElementValueById(elementId, value) {
    let subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function totalPrice() {
    const phonePriceElement = document.getElementById("phone-total");
    const phonePrice = parseInt(phonePriceElement.innerText);

    const casePriceElement = document.getElementById("case-total");
    const casePrice = parseFloat(casePriceElement.innerText);

    const subTotal = phonePrice + casePrice;
    setTextElementValueById("sub-total", subTotal);

    // calculate tax
    const taxAmount = parseFloat((subTotal * 0.1).toFixed(2));
    setTextElementValueById("tax", taxAmount);

    const finalAmount = subTotal + taxAmount;
    setTextElementValueById("total", finalAmount);
}

function updateElementNumber(className, isIncrease) {
    // get the value inside the number input field
    const elementNumberField = document.getElementById(className);
    // convert to an integer number
    const previousElementNumber = parseInt(elementNumberField.value);
    // calculate the new element number
    let newElementNumber;
    if (isIncrease) {
        newElementNumber = previousElementNumber + 1;
    } else {
        newElementNumber = previousElementNumber - 1;
    }
    // set the value to the element number field
    elementNumberField.value = newElementNumber;
    return newElementNumber;
}

function updateElementTotalPrice(element, newElementNumber, className) {
    let elementTotalPrice;
    if (element === "phone") {
        elementTotalPrice = newElementNumber * 1219;
    } else if (element === "case") {
        elementTotalPrice = newElementNumber * 59;
    }
    const totalElement = document.getElementById(className);
    totalElement.innerText = elementTotalPrice;
    totalPrice();
}

totalPrice();

