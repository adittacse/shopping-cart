// step 1: add event listener to the phone plus button
document.getElementById("btn-phone-plus").addEventListener("click", function() {
    const newPhoneNumber = updateElementNumber("phone-number-field", true);
    updateElementTotalPrice("phone", newPhoneNumber, "phone-total");
});

// step 2: add event listener to the phone minus button
document.getElementById("btn-phone-minus").addEventListener("click", function() {
    const newPhoneNumber = updateElementNumber("phone-number-field", false);
    updateElementTotalPrice("phone", newPhoneNumber, "phone-total");
});

