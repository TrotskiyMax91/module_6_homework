function getSum(n){
    return function(anotherNumber){
        return n + anotherNumber;
    };
}
console.log(getSum(145)(155));