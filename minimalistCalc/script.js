function insert(num) {
  document.form.calcView.value = document.form.calcView.value + num;
}

function equal() {
  var userInput = document.form.calcView.value;
  if (userInput) {
    // eval evaluates or executes an argument /expressions/statements --does the math
    document.form.calcView.value = eval(userInput);
  }
}

function reset() {
  //clears everything to empty string
  document.form.calcView.value = "";
}

function back() {
  var userInput = document.form.calcView.value;
  //substring removes characters from a string between 2 specified indices
  document.form.calcView.value = userInput.substring(0, userInput.length - 1);
}
