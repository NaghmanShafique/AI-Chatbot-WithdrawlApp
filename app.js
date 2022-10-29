    
    let moneyBox  = 22000; // ATM Machine Money box
    let cardDailyLimit =  20000 // Card Daily Limit
    let accountBalance =  50000 // Account Balance

function checkPin() {
    console.log("I am checking my Pin.");

    let userInput = document.querySelector("#userPin").value;
    
    // console.log(userInput) ;
    
    if(userInput.length < 4 || userInput.length > 4) {
        document.querySelector("#errMsg").innerHTML = 'You must enter 4 digit ping number.';
        return;
    } 

     if (userInput.length==4 && userInput === '1234') {
        document.querySelector("#errMsg").innerHTML = 'Your pin is correct ✔';

        document.querySelector("#ATM-Screen").innerHTML = `
        <form class="atm-form" onsubmit="withdraw(); return false">
        <div class="atm-div">
        <label for="userAmt">Enter Your widhdrawl Amount :</label> 
        <input id="userAmt" type="number">
          <br>
          <button class="amt-btn">Withdrawl</button>
             </div>
       </form>
       <h4 id="errAtm"></h4>
        `

    } else {
        document.querySelector("#errMsg").innerHTML = 'Your pin is Incorrect ❌';
    }
}

function withdraw() {
    
    let userAmount = document.querySelector("#userAmt").value;

    let newAmount = userAmount%500;
    //console.log("Modules",newAmount);
    if (newAmount !== 0 ) {
        document.querySelector("#errAtm").innerHTML = 'Withdrawl Amount must be divisible with 500.';
        return;
    } else {
        document.querySelector("#errAtm").innerHTML = '';
        
        if (userAmount <= moneyBox) {
            moneyBox = moneyBox - userAmount;
            document.querySelector("#money-box").innerHTML = 'Money box Balance : '+moneyBox;
        } else if (userAmount > moneyBox) {
            document.querySelector("#errAtm").innerHTML = 'This ATM does not have enough Money. Please try Smaller Amount.';
            return;
        }  
        
        if (userAmount <= cardDailyLimit) {
            cardDailyLimit = cardDailyLimit - userAmount;
            document.querySelector("#daily-limit").innerHTML = 'Card Daily Limit : '+cardDailyLimit;
        } else if (userAmount > cardDailyLimit) {
            document.querySelector("#errAtm").innerHTML = 'Withdrawl Amount is greater then your daily Limit amount '+cardDailyLimit+'.';
            return
        }

        if (userAmount <= accountBalance) {
            accountBalance = accountBalance - userAmount;
            document.querySelector("#act-bal").innerHTML = 'Account Balance : '+accountBalance;
        } else if (userAmount > accountBalance) {
            document.querySelector("#errAtm").innerHTML = 'Withdrawl Amount Amount is greater then your daily Limit amount '+accountBalance+'.';
            return;
        }    
        
    }
    console.log("Money Box",moneyBox);
    console.log("Daily Card Limit",cardDailyLimit);
    console.log("Account",accountBalance);
    console.log(userAmount);


    // if (userAmount > moneyBox) {
    //     document.querySelector("#errAtm").innerHTML = 'This ATM does not have enough Money. Please try Smaller Amount.';
    //     return
    // } else 
    // if (userAmount > cardDailyLimit) {
    //     document.querySelector("#errAtm").innerHTML = 'Withdrawl Amount is greater then your daily Limit amount '+cardDailyLimit+'.';
    //     return
    // } else if (userAmount > accountBalance) {
    //     document.querySelector("#errAtm").innerHTML = 'Withdrawl Amount Amount is greater then your daily Limit amount '+accountBalance+'.';
    //     return;
    // } 
}