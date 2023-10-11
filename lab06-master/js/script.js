// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER WITH VALIDATION
investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));

// Validate the investment input
if (isNaN(investment)) {
  alert('Investment amount must be a numeric value.');
} else {
  rate = parseFloat(prompt('Enter interest rate as xx.x'));
  
  // Validate the interest rate input
  if (isNaN(rate) || rate < 0 || rate > 100) {
    alert('Interest rate must be a numeric value between 0 and 100.');
  } else {
    years = parseInt(prompt('Enter the number of years you want to invest for'));
    
    // Validate the number of years input
    if (isNaN(years) || years < 1 || years > 30) {
      alert('The number of years must be a numeric value between 1 and 30.');
    } else {

      // CALCULATE FUTURE VALUE
      futureValue = investment;
      for (let i = 0; i < years; i++) {
          futureValue = futureValue + (futureValue * rate / 100);
      }

      // DISPLAY RESULT
      document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
      document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
      document.write(`Years: ${years}<br>`);
      document.write(`Future value: $${futureValue.toFixed(2)}`);
    }
  }
} 

