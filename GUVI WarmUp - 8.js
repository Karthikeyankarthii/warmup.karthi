/* Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false. */

function lessThan100(num1, num2) {
	///Your code Starts here 
	
	const sum = num1 + num2;
	
	return sum < 100;
	
	
	
	///Your code Ends here
}
console.log(lessThan100(22, 45));
/*
Lines For TestCase

lessThan100(22, 15);
lessThan100(83, 34);
lessThan100(50, 50);
*/