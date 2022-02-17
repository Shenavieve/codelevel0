function findVowel(input){
  const vowels = ["a","e","i","o","u"];
  
  const vowelsInput = [];
  
  for(let i = 0; i < vowels.length; i++){
    if(input.toLowerCase().includes(vowels[i])){
      vowelsInput.push(vowels[i]);
    }
  }
  console.log("Vowels: "+ vowelsInput.toString());
}

function findVowel2(input){
  const vowels = ["a", "e", "i", "o","u"];
  
  const vowelsInput = [];
  
  for(let x = 0; x < input.length; x++){
    for(let i = 0; i < vowels.length; i++){
      if(vowels[x]==input.charAt(i)){
        vowelsInput.push(vowels[i]);
      }
    }
  }
  console.log("Vowels: "+ vowelsInput.toString())
}
findVowel("shenAvieve");
findVowel2("mitchell")
