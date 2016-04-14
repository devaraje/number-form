  var inputList = "Input List : ";
  var count = 0;
  var sum = 0;
  var invalidInputError = "Please enter a valid number";
  var submitButton = document.getElementById("btn-submit");
  var resetButton = document.getElementById("btn-reset");
  var outputList = document.getElementById("numList");
  var outputCount = document.getElementById("count");
  var outputSum = document.getElementById("sum");
  var outputAvg = document.getElementById("avg");
  var outputError = document.getElementById("error");

  submitButton.addEventListener("click", onClickSubmit, false);
  resetButton.addEventListener("click", onClickReset, false);


function onClickSubmit(evt)
{
  evt.preventDefault();
  outputError.innerHTML = "";
  
  //get the input
  var input = document.getElementById('inputNumber').value;
  
  if (isNaN(input)) {
    outputError.innerHTML = invalidInputError;
  }
  
  //append the input value to the output string
  inputList += input.toString() + " ";
  
  //increment the count of numbers inputted
  count++;
  
  //append the input value to get the sum
  sum = sum + parseFloat(input);
  
  //Write the output
  outputList.innerHTML = inputList;
  outputCount.innerHTML = "Count : " + count;
  outputSum.innerHTML = "Sum : " + sum;
  outputAvg.innerHTML = "Avg : " + (sum/count);

}

function onClickReset(evt)
{
  //Clear the output and re-initialize variables
  inputList = "";
  count = 0;
  outputList.innerHTML = inputList;
  outputCount.innerHTML = "";
  outputSum.innerHTML = "";
  outputAvg.innerHTML = "";
  outputError.innerHTML = "";
}


