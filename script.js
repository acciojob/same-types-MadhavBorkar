function isSameType(value1, value2) {
  //your js code here
	function isSameType(value1, value2) {
    if (isNaN(value1) && isNaN(value2)) {
        return true; // Both values are NaN
    }

    return typeof value1 === typeof value2;
}

// Test cases
console.log(isSameType(1, 3));        // true
console.log(isSameType("hey", "hello"));  // true
console.log(isSameType(NaN, NaN));    // true
console.log(isSameType("3", 3));      // false
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
