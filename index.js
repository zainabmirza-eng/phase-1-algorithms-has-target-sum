function hasTargetSum(array, target) {
  // Iterate through each element in the array
  for (let i = 0; i < array.length; i++) {
    // Iterate through the remaining elements in the array
    for (let j = i + 1; j < array.length; j++) {
      // Check if the current element and any other element add up to the target sum
      if (array[i] + array[j] === target) {
        return true; // If a pair is found, return true
      }
    }
  }
  // If no such pair is found, return false
  return false;
}

/*
  Written explanation:
  This solution iterates through each element in the array and, for each element, iterates through the remaining elements in the array to check if any pair adds up to the target sum. If such a pair is found, the function returns true; otherwise, it returns false.
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
