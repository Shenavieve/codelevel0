function commonLetters(input1, input2){
  const common = [];
  if(input1.length >= input2.length){
    for(let x = 0; x< input1.length; x++){
      for(let i = 0; i < input2.length; i++){
        if(input1.charAt (x) == input2.charAt(i)){
          common.push(input1.charAt(x));
        }
      }
    }
    console.log ("common letters: "+common.toString());
  }
  else{
    for(let x = 0; x < input2.length; x++){
      for(let i = 0; i < input1.length; i++){
        if(input2.charAt(x)== input1.charAt(i)){
          common.push(input2.charAt(x));
        }
      }
    }
    console.log("common letters: "+common.toString());
    
  }
}
commonLetters("shenavieve", "mitchell");