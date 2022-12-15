function isPalindrome(word) {
 for(let a =0 ; a < word.length/2 ; a++){
  const z = word.length -1 - a;
  

  if (word[a] !== word[z]) 
  return false
 }

 return true
}


if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;