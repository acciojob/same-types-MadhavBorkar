function isSameType(value1, value2) {
    if (isNaN(value1) && isNaN(value2)) {
        return true;
    }
    return typeof value1 === typeof value2;
}
console.log(isSameType(5, 10));
console.log(isSameType("hello", "world"));
console.log(isSameType(NaN, NaN));
console.log(isSameType("42", 42));