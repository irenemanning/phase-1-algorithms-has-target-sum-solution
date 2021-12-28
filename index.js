/*
function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i]
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) return true
    }
  } 
  return false
}
runtime:0(n^2)
space: 0(n)
*/
//OPTOMIZED VERSION

function hasTargetSum(array, target) {
  const seenNumbers = {}
  for (const number of array) {
    const complement = target - number
    if (complement in seenNumbers) return true
    seenNumbers[number] = true
  }
  return false
}




/* 
  Write the Big O time complexity of your function here
  Runtime:
*/

/* 
  create an object to keep track of numbers we've already seen
  iterate through each number in array
  for current num, identify a compliment that adds to the target (comp =  target- num)
  iterate through rest of array
  check if any key on our object is a compliment
   if so return true, otherwise add to object
  if so, return true
  if by the end of array there is none, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
