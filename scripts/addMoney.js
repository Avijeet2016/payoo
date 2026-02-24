document.getElementById('add-money-btn').addEventListener('click', function() {
    const addMoneyBank = getValueFromId('add-money-bank');
    if (addMoneyBank == "Select Bank") {
        alert('Select a Bank');
        return;
    }
    const addMoneyNumber = getValueFromId('add-money-number');
    if (addMoneyNumber.length != 11) {
        alert('Invalid Number');
        return;
    }
    const addMoneyAmount = getValueFromId('add-money-amount');
    if (addMoneyAmount <= 0) {
        alert('Invalid Amount');
        return;
    }
    const newBalance = getBalance() + Number(addMoneyAmount);
    
    const addMoneyPin = getValueFromId('add-money-pin');
    if (addMoneyPin === '1234') {
        alert(`Add Money Successful 
            from ${addMoneyBank} 
            at ${new Date()}`);
        setBalance(newBalance);
    }
    else {
        alert('Invalid Pin');
        return;
    }

});