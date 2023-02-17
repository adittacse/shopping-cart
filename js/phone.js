function updatePhoneNumber(isIncrease) {
    // get the value inside the number input field
    const phoneNumberField = document.getElementById("phone-number-field");
    // convert to an integer number
    const previousPhoneNumber = parseInt(phoneNumberField.value);
    // calculate the new phone number
    let newPhoneNumber;
    if (isIncrease) {
        newPhoneNumber = previousPhoneNumber + 1;
    } else {
        newPhoneNumber = previousPhoneNumber - 1;
    }
    // set the value to the phone number field
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber) {
    const phoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById("phone-total");
    phoneTotalElement.innerText = phoneTotalPrice;
}

// step 1: add event listener to the phone plus button
document.getElementById("btn-phone-plus").addEventListener("click", function() {
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber);
});

// step 2: add event listener to the phone minus button
document.getElementById("btn-phone-minus").addEventListener("click", function() {
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);
});

