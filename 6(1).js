let myArray = [-5, 0, 1, 2, 5, 6, 30, 'пятница', '123' ];

function checkArray(array){
  let oddNumbers = 0;
  let evenNumbers = 0;
  let zero = 0;
  let _string = 0;

  for(let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number" & myArray[i] !== 0 && !isNaN(myArray[i])) {
      if (array[i] % 2 === 0) {
        evenNumbers = evenNumbers + 1;
      } else if (array[i] % 2 !== 0){
        oddNumbers = oddNumbers + 1;
      }
    } else if(typeof array[i] === "string"){
      _string = _string + 1;

    } else if(array[i] === 0){
      zero = zero + 1;
    }
  };
  console.log('Чётных чисел: ' + evenNumbers);
  console.log('Нечётных чисел: ' + oddNumbers);
  console.log('Нули: ' + zero);
  console.log('Строк: ' + _string);
}
checkArray(myArray);