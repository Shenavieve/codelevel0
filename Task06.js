function maximum (input1, input2, input3){
  var numbers = [input1, input2, input3];
  var maxNumber = 0; 
  for (let x = 0; x < numbers.length; x++){
    if (numbers [x] >= maxNumber){
      maxNumber = numbers[x];
    }
  }
  console.log("max number: "+maxNumber)
}

//any amount of numbers

function maximum2(){
  
  let numbers = [];
  let delimiter = ',';
  for(let i = 0; i< arguments.length; i++){
    if(arguments[i] !== delimiter){
      numbers.push(arguments[i]);
    }
  }
  var maxNumber = 0;
  for (let x = 0; x < numbers.length; x++){
    if(numbers[x] >= maxNumber){
      maxNumber = numbers [x];
    }
  }
  console.log("max number: "+maxNumber);
}

maximum(7,367857637, 4);
maximum2(5,78,367,23,790,1,43,65,70);