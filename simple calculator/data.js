// Append the clicked button's value to the display
function appendToDisplay(value) {
  const display = document.querySelector(".display");
  display.value += value;
}

// Clear the display
function clearDisplay() {
  const display = document.querySelector(".display");
  display.value = "";
}

// Calculate the expression in the display
function calculate() {
  const display = document.querySelector(".display");
  try {
    // Use eval to evaluate the expression
    // Note: eval can be dangerous if used with untrusted input
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

// Delete the last character from the display
function deleteLast() {
  const display = document.querySelector(".display");
  display.value = display.value.slice(0, -1);
}
