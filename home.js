const validPin = 1234;

// resuable function
// functions to get input values
function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);
  return inputFieldValueNumber;
}

function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  return inputFieldValue;
}

// function to get innertext
function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);

  return elementValueNumber;
}

// function to set innerText
function setInnerText(value) {
  console.log(value);
  const availableBalanceElement = document.getElementById("available-balance");
  availableBalanceElement.innerText = value;
}


//function to toggle
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// add money feature
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bank = getInputValue("bank");
    const accountNumber = document.getElementById("account-number").value;

    const amount = getInputValueNumber("add-amount");

    if (amount <= 0) {
      alert("invalid amount");
      return;
    }

    const pinNumber = getInputValueNumber("add-pin");

    const availableBalance = getInnerText("available-balance");

    if (accountNumber.length < 11) {
      alert("Invalid account Number");
      return;
    }

    if (pinNumber !== validPin) {
      alert("Invalid pin Number");
      return;
    }

    const totalNewAvailableBalance = amount + availableBalance;

    setInnerText(totalNewAvailableBalance);
  });

//cashout money feature

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const agentNumber = getInputValueNumber("agent-number");
  const pinNumber = getInputValueNumber("withdraw-pin");
  const amount = getInputValueNumber("withdraw-amount");

  const availableBalance = getInnerText("available-balance");

  if (agentNumber.length < 11) {
    alert("Invalid agent Number");
    return;
  }
  if (pinNumber !== validPin) {
    alert("Invalid pin Number");
    return;
  }

  if (amount <= 0 || amount > availableBalance) {
    alert("invalid amount");
    return;
  }

  

  const totalNewAvailableBalance = availableBalance - amount;

  console.log(totalNewAvailableBalance);

  setInnerText(totalNewAvailableBalance);
});

// toggling feature

document.getElementById("add-button").addEventListener("click", function (e) {
  handleToggle("add-money-parent");
});
document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    handleToggle("cash-out-parent");
  });
document
  .getElementById("transfer-button")
  .addEventListener("click", function () {
    handleToggle("transfer-money-parent");
  });
document.getElementById("bonus-button").addEventListener("click", function () {
  handleToggle("get-bonus-parent");
});
document.getElementById("bill-button").addEventListener("click", function () {
  handleToggle("pay-bill-parent");
});
document
  .getElementById("transactions-button")
  .addEventListener("click", function () {
    handleToggle("transactions-parent");
  });
