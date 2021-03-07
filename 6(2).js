let isPrime = true;
let numberIsPrime = function(digit) {
    if(digit === 0 || digit === 1 || digit > 1000){
        console.log('Данные неверны');
        return;
    } else if(digit > 1) {
        for (let i = 2; i < digit; i++){
            if(digit % 1 == 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        console.log(`${digit} это простое число`);
    } else {
        console.log(`${digit} это составное число`);
    }
};
numberIsPrime(1001);