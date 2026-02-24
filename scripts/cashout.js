document.getElementById('cashout-btn').addEventListener('click', function() {
    // minimalistic coding
    const cashoutNumber = getValueFromId('cashout-number');
    if (cashoutNumber.length != 11) {
        alert('Invalid number');
        return;
    }
    const cashoutAmount = getValueFromId('cashout-amount');
    // const balanceElement = document.getElementById('balance');
    // const balance = balanceElement.innerText;
    const balance = getBalance();
    const newBalance = balance - Number(cashoutAmount);

    if (newBalance < 0) {
        alert('Invalid amount');
        return;
    }
    const pin = getValueFromId('cashout-pin');
    if (pin === "1234") {
        alert('Cashout Successful');
        // document.getElementById('balance').innerText = newBalance;
        setBalance(newBalance);
    }  
    else {
        alert('Invalid pin');
        return;
    }
});


/* // Raw Coding 
document.getElementById('cashout-btn').addEventListener('click', function() {
    const cashoutNumberInput = document.getElementById('cashout-number');
    const cashoutNumber = cashoutNumberInput.value; 
    
    if (cashoutNumber.length != 11) {
        alert('Invalid Agent Number');
        return;
    }

    const cashoutAmountInput = document.getElementById('cashout-amount');
    const cashoutAmount = cashoutAmountInput.value;
    
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    
    const newBalance = Number(balance) - Number(cashoutAmount);

    if (newBalance < 0) {
        alert('Invalid amount');
        return;
    } 

    const cashoutPin = document.getElementById('cashout-pin');
    const pin = cashoutPin.value;

    if (pin === "1234") {
        alert('Cashout Successful');
        balanceElement.innerText = newBalance;
    } 
    else {
        alert('Invalid PIN - Try again');
        return;
    }

    
});
*/


