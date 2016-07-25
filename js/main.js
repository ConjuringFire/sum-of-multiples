/**
 *  Gets values from input fields and executes functions to display answer
 *  @return {value} appended to div
 */
function calculateMultiples() {
  document.getElementById("multiples").parentElement.classList.remove("error"); //clear error styling
  document.getElementById("maxValue").parentElement.classList.remove("error"); //clear error styling

  var multiples = document.getElementById("multiples").value;
  var maxValue = document.getElementById("maxValue").value;
  // form validation
  if (multiples === '' || maxValue === '' || /^(?!,)(,?[0-9]+)+$/.test(multiples) === false) { // checks if the fields are empty or contain incorrect values
    if (multiples === '' || /^(?!,)(,?[0-9\s*]+)+$/.test(multiples) === false) {
      document.getElementById("multiples").parentElement.classList.add("error");
    }
    if (maxValue === '') {
      document.getElementById("maxValue").parentElement.classList.add("error");
    }
    return false; // breaks the function
  }
  multiples = multiples.split(','); // explode the string into an array
  var values = addMultiples(multiples, maxValue); //run the addMultiples function
  var div = document.getElementById("answer");
  div.innerHTML = values;
}

/**
 *  Finds the multiples of the input values and returns a sum
 *  @param {array} multiples
 *  @param {number} maximum value
 *  @return {number} sum
 */
function addMultiples(multiples, maxValue) {
  var mutliplesArr = []; // declare mutliplesArr array
  loopInts: // the first for loop is labelled "loopInts"
  for(var i=1; i<maxValue; i++) { // loop through integers from 1 to max number
    for(var k=0; k < multiples.length; k++) { // loop through integers that you want to find the multiples of
      if (i % multiples[k] === 0) { // if a division remainder of 0 is returned
        mutliplesArr.push(i); // add integer to multiplesArr array
        continue loopInts; // breaks an interation of the "loopInts" for loop to avoid duplicate values being added
      }
    }
  }
  return mutliplesArr.reduce(add, 0);
}

/**
 *  Get the sum of 2 numbers
 *  @param {number} a
 *  @param {number} b
 *  @return {number} sum
 */
function add(a, b) {
    return a + b;
}
