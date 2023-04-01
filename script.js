let calculateEMI = () => {
	let loanType = document.getElementById("loanType").value;
	let loanAmount = Number(document.getElementById("loanAmount").value);
	let months = Number(document.getElementById("months").value);
	let interestRate = Number(document.getElementById("interestRate").value);
   
    // Interest
	let monthlyInterestRate = interestRate / 100 / 12;
    // compute the monthly payment figure
    let x = Math.pow(1 + monthlyInterestRate, months); //Math.pow computes powers
    // EMI
	let emi = (loanAmount * monthlyInterestRate * x) / (x - 1);

	let emiDisplay = document.getElementById("emiDisplay");
	if (loanType === "home") {
		emiDisplay.innerHTML = "Monthly EMI for Home Loan: $" + emi.toFixed(2);
	} else if (loanType === "car") {
		emiDisplay.innerHTML = "Monthly EMI for Car Loan: $" + emi.toFixed(2);
	} else if (loanType === "bike") {
		emiDisplay.innerHTML = "Monthly EMI for Bike Loan: $" + emi.toFixed(2);
	}
}

let reset = () => {
	document.getElementById("loanType").value = "home";
	document.getElementById("loanAmount").value = "";
	document.getElementById("months").value = "";
	document.getElementById("interestRate").value = "";
	document.getElementById("emiDisplay").innerHTML = "";
}
