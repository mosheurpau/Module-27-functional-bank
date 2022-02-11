// hanle deposit button
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);

    // get current deposit 
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    depositTotal.innerText = previousDepositAmount + newDepositAmount;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + newDepositAmount;

    // clear input field
    depositInput.value = '';
});

// hanle withdrow button
document.getElementById('withdrow-btn').addEventListener('click', function () {
    const withdrowInput = document.getElementById('withdrow-input');
    const newWithdrowText = withdrowInput.value;
    const newWithdrowAmount = parseFloat(newWithdrowText);

    // get current withdrow
    const withdrowTotal = document.getElementById('withdrow-total');
    const previousWithdrowText = withdrowTotal.innerText;
    const previousWithdrowAmount = parseFloat(previousWithdrowText);

    withdrowTotal.innerText = previousWithdrowAmount + newWithdrowAmount;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - newWithdrowAmount;

    // clear input field
    withdrowInput.value = '';
});