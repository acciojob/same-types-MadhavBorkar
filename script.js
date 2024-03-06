function isSameType(value1, value2) {
    if (value1==value2) {
        return true;
    }
	else{
		return false;
	}
}
console.log(isSameType(5, 10));
console.log(isSameType("hello", "world"));
console.log(isSameType(NaN, NaN));
console.log(isSameType("42", 42));