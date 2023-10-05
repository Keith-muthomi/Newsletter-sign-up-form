// Get the email input field using the `document.getElementById()` method.
const emailInput = document.getElementById('email-input');

// Get the submit button using the `document.getElementById()` method.
const submitBtn = document.getElementById('submit-btn');

// Get the success section using the `document.querySelector()` method.
const successSection = document.querySelector('.success-section');

// Get the form section using the `document.querySelector()` method.
const formSection = document.querySelector('.form-section');

// Get the error text element using the `document.querySelector()` method.
const errorText = document.querySelector('.error-text');

// Add an event listener to the submit button to validate the email address and submit the form.
submitBtn.addEventListener('click', (e) => {
  // Prevent the default form submission behavior.
  e.preventDefault();

  // Call the `validate()` function to validate the email address.
  validate();
});

// Define a regular expression to match a valid email address.
const emailReg = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

// Define a function to validate the email address.
function validate() {
  // Check if the email input field is empty.
  if (emailInput.value === "") {
    // Add the `error` class to the email input field.
    emailInput.classList.add('error');

    // Display the error text element.
    errorText.style.display = 'block';
  } else {
    // Check if the email address matches the regular expression.
    if (emailInput.value.match(emailReg)) {
      // Hide the form section.
      formSection.style.display = "none";

      // Add the `active` class to the success section.
      successSection.classList.add('active');
    } else {
      // Add the `error` class to the email input field.
      emailInput.classList.add('error');

      // Display the error text element.
      errorText.style.display = "block";
    }
  }
}
