document.getElementById('bonus-btn').addEventListener('click', function() {
    const getBonus = getValueFromId('bonus');
    if (getBonus === "bonus1") {
        alert('You have got 500TK bonus');
        const history = document.getElementById('history-container');
        const historyElement = document.createElement('div');
        historyElement.innerHTML = `
            <div class="py-3 mb-2 bg-base-100 card-body rounded-2xl">
                <p>You have got 500Tk at ${new Date()}</p>
            </div>
        `;
        history.append(historyElement);
    }
    else {
        alert('Invalid Coupon Code');
        return;
    }
});
