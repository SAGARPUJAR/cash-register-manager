const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-give");
const buttonCheck = document.querySelector("#btnCheck");
const msg = document.querySelector("#error-msg");
const noofnotesUI = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

buttonCheck.addEventListener("click", function validateBillAndCashAmount() {
  if (billAmount.value > 0) {
    msg.innerText = "";
    if (cashGiven.value >= billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      calculateChage(amountToBeReturned);
    } else {
      msg.innerText = "Cash Provided should atleast be equal to bill amount";
    }
  } else {
    msg.innerText = "Invalid Bill Amount";
  }
});

function calculateChage(val) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberofNotes = Math.trunc(val / availableNotes[i]);
    val %= availableNotes[i];
    noofnotesUI[i].innerText = numberofNotes;
  }
}
