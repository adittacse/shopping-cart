// step 1: add event listener to the case plus button
document.getElementById("btn-case-plus").addEventListener("click", function() {
    const newCaseNumber = updateElementNumber("case-number-field", true);
    updateElementTotalPrice("case", newCaseNumber, "case-total");
});

// step 2: add event listener to the case minus button
document.getElementById("btn-case-minus").addEventListener("click", function() {
    const newCaseNumber = updateElementNumber("case-number-field", false);
    updateElementTotalPrice("case", newCaseNumber, "case-total");
});

