function getValueFromId(id) {
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}

function getBalance() {
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    return Number(balance);
}

function setBalance(value) {
    document.getElementById('balance').innerText = value;
}

function showOnly(id) {
    const addMoney = document.getElementById('add-money');
    const cashout = document.getElementById('cashout');
    const history = document.getElementById('history');
    const transferMoney = document.getElementById('transfer-money');
    const bonus = document.getElementById('bonus-container');
    const payBill = document.getElementById('pay-bill');

    addMoney.classList.add('hidden');
    cashout.classList.add('hidden');
    history.classList.add('hidden');
    transferMoney.classList.add('hidden');
    bonus.classList.add('hidden');
    payBill.classList.add('hidden');
    
    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
}

