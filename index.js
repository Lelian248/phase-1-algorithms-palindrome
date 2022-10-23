function isPalindrome(word) {
  // Write your algorithm here
  let wordLength = word.length
  for(let i=0 ; i < wordLength/2 ;i++){
    if (word[i] !== word[wordLength -1 - i]){
      console.log("fales")
      return false
    } 
  }
  return true
}

/* 
  Add your pseudocode here
  1- fined the word length 
  2- loop throught the word and check if the element index equal to the elemnt length minus th index 
  if no return fales then  divide the length t half so we can remove the first and laast element and compare the rest 
  we keep looping until the index become bigger than the length\2 if yes return true 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
