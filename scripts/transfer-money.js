document.getElementById('transfer-btn').addEventListener('click', function() {
    const transferNumber = getValueFromId('transfer-number');
    if (transferNumber.length != 11) {
        alert('Invalid Number');
        return;
    }
    const transferAmount = getValueFromId('transfer-amount');
    const newBalance = getBalance() - Number(transferAmount);
    
    if (newBalance < 0) {
        alert('Invalid Amount');
        return;
    }
    const transferPin = getValueFromId('transfer-pin');
    if (transferPin === "1234") {
        alert(`Transferred ${transferAmount}TK. 
            at ${new Date()}`);
        setBalance(newBalance);

        const history = document.getElementById('history-container');
        const historyElement = document.createElement('div');
        historyElement.innerHTML = `
            <div class="py-3 mb-2 bg-base-100 card-body rounded-2xl">
                <p>Transferred ${transferAmount}TK. at ${new Date()}</p>
            </div>
        `;
        history.append(historyElement);
    }
    else {
        alert('Invalid Pin');
        return;
    }
});