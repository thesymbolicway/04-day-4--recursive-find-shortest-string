function findShortestStringRecursive(arr) {
  // base case: if the array has only one element, return it
  if (arr.length === 1) {
    return arr[0];
  }
  
  // get the first two elements of the array
  const first = arr[0];
  const second = arr[1];
  
  // compare the lengths of the first two elements
  // if the second element is shorter, remove the first element from the array
  if (second.length < first.length) {
    arr.shift();
  } else {
    // otherwise, remove the second element
    arr.splice(1, 1);
  }
  
  // call the function again with the modified array
  return findShortestStringRecursive(arr);
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
