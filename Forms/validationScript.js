// JavaScript code for form validation
// Prevent form from submitting
// Retrieve the input field value
// Regular expression pattern for alphanumeric input
// Check if the input value matches the pattern
// Valid input: display confirmation and submit the form
// Invalid input: display error message

// Add an event listener to the form submits an event.

document.getElementById('myForm').addEventListener('submit', function(event) {

  // Retrieve the input field element using JavaScript.

  let inputString = document.getElementById('inputField').value;

  // Implement a function that validates the input value using a regular expression for alphanumeric input.

  function validator(inputString) {
    let alphNumRegex = /^[a-zA-Z0-9]*$/;

    // Display an error message if the input value is not alphanumeric.
    // Prevent the form from submitting if the input value is not alphanumeric.
    // Display a confirmation if the input is valid and 'submit' the form.
    
    if (inputString === '') {
      alert('Input missing! Input value must be alphanumeric.');
      event.preventDefault(); 
    } else if (!alphNumRegex.test(inputString)) {
      alert('Invalid input! Input value must be alphanumeric.');
      event.preventDefault(); 
    } else {
      alert('Submission confirmed!');
    }
  }

  validator(inputString);
});




