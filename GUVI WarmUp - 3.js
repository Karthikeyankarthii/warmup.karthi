/* Create a function that takes a string and returns it as an integer. */

function toInteger(str) {
	// Convert the string to an integer
	const result = parseInt(str, 10);
	
	// Check if the result is a valid number
	if (isNaN(result)) {
		throw new Error('Input string is not a valid integer');
	}
	
	return result;
}