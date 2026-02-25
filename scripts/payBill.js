document.getElementById('pay-bill-btn').addEventListener('click', function(){
    const payBillBank = getValueFromId('pay-bill-bank');
    if (payBillBank == "Select Bank") {
        alert('Select a Bank');
        return;
    }
    const payBillNumber = getValueFromId('pay-bill-number');
    if (payBillNumber.length != 11) {
        alert('Invalid Number');
        return;
    }
    const payBillAmount = getValueFromId('pay-bill-amount');
    const newBalance = getBalance() - Number(payBillAmount);

    if (newBalance < 0) {
        alert('Invalid Amount');
        return;
    }
    const payBillPin = getValueFromId('pay-bill-pin');
    if (payBillPin === "1234") {
        alert('Pay Bill Successful');
        setBalance(newBalance);
        
        const history = document.getElementById('history-container');
        const historyElement = document.createElement('div');
        historyElement.innerHTML = `
            <div class="py-3 mb-2 bg-base-100 card-body rounded-2xl">
                <p>Pay Bill ${payBillAmount} at ${new Date()}</p>
            </div>
        `;
        history.append(historyElement);
    }
    else {
        alert('Invalid Pin');
        return;
    }
});