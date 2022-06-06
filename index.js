function isPalindrome(word) {
  // Write your algorithm here
  let newString = '';
  for (let i = word.length-1; i >= 0; i--) {
    newString += word[i];
  }
  if (newString == word) {
    return true;
  } else {
    return false;
  }
}

/* 
  Crate a new string variable
  Create a for loop to iterate thorugh string backwards
  if new string = original string, then palindrome true
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
