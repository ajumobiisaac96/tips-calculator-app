
// var bills = document.getElementById("bills").value;
// var customInput = document.getElementById("custom-input").value;
// var numberOfPeople = document.getElementById('people').value
// var tipsAmount = document.getElementById("tips-amount"); 
// var totalCost = document.getElementById("total-cost");


function calculate() {
    // Get input values
    const bills = parseFloat(document.getElementById('bills').value);
    const customInput = parseFloat(document.getElementById('custom-input').value);
    const numberOfPeople = parseFloat(document.getElementById('people').value);

    // Calculate tips amount per person
    const tipsAmountPerPerson = (bills * (customInput / 100)) / numberOfPeople;
    
    // Display the calculated tip amount
    document.getElementById('total-cost-1').textContent = "$" + tipsAmountPerPerson.toFixed(2);
    console.log(tipsAmountPerPerson);
}




// function calculate(){    
//     const tipsAmountPerPerson = (bills*(customInput/100)) / numberOfPeople;
    
//     tipsAmount.innerHTML = "$ " + tipsAmountPerPerson.toFixed(2);
//     console.log(tipsAmountPerPerson);
// }

function totalCalculation(){

    var bills = parseFloat(document.getElementById('bills').value);
    var customInput = parseFloat(document.getElementById('custom-input').value);
    var numberOfPeople = parseFloat(document.getElementById('people').value);


    var tipPercent = (bills*(customInput/100));
    var total = (bills + tipPercent) / numberOfPeople;

    document.getElementById('total-cost-2').textContent = "$" + total.toFixed(2);
    console.log(total);

}    

function checkError(){
    var numberOfPeople = parseFloat(document.getElementById('people').value);

    if(numberOfPeople <= 0){
        document.getElementById('error-message').style.display = 'flex';
        document.getElementById('people').style.border = '2px solid red';
        console.log(111)
    } else{
        document.getElementById('error-message').style.display = 'none';
        document.getElementById('people').style.border = '';
    }

}

function fixedTip(){
// Select all buttons with the class "btn1"
const buttons = document.querySelectorAll('.btn1');

// Loop through each button
buttons.forEach(button => {
    // Add click event listener to each button
    button.addEventListener('click', function() {
        // Display the value of the clicked button
        console.log(this.textContent); // Output: the text content of the clicked button
    });
});

}