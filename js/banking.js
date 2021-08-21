document.getElementById('deposit-button').addEventListener('click',function(){
    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value ;
    
    const depositAmount = parseFloat(depositInputText);
    console.log(depositAmount);
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const newDeposit = parseFloat(depositTotalText);

    depositTotal.innerText = depositAmount + newDeposit;
    depositInput.value = '';
   

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const newBalance = parseFloat(balanceTotalText);
    balanceTotal.innerText = newBalance + depositAmount;

    depositInput.value = '';
})

document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const newWithdraw = parseFloat(withdrawInputText);

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const newWithdrawAmount = parseFloat(withdrawTotalText);

    withdrawTotal.innerText = newWithdrawAmount + newWithdraw;
    withdrawInput.value ='';

    const balanceTotalAmount = document.getElementById('balance-total');
    const balanceTotalAmountText = balanceTotalAmount.innerText;
    const totalBalance = parseFloat(balanceTotalAmountText);

    balanceTotalAmount.innerText = totalBalance - newWithdraw;
    withdrawInput.value ='';
})