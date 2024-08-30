# Telephone Number Validator

This is my attempt at one of the five coding projects for the JavaScript Algorithms and Data Structures certification offered by FreeCodeCamp.

## Description

This project allows users to input a phone number and check if it's a valid US phone number format. It provides immediate feedback on whether the entered number is valid or not.

## Files

1. `index.html`: The main HTML file that structures the web page.
2. `script.js`: Contains the JavaScript code for validating phone numbers and handling user interactions.
3. `styles.css`: Defines the styling for the web page.


## How It Works

1. The user enters a phone number in the input field.
2. Clicking "Check Number" triggers the validation process:
   - If the input is empty, an alert is shown.
   - The input is checked against a regular expression that matches valid US phone number formats.
   - The result is displayed below the input field.
3. Clicking "Clear Number" resets the input field and clears any displayed results.

## Valid Phone Number Formats

The validator accepts the following US phone number formats:

- (123) 456-7890
- (123)456-7890
- 123-456-7890
- 123.456.7890
- 1234567890
- 1 123 456 7890

The validator also allows for an optional '1' at the beginning of the number.

Feel free to customize and expand upon this project as needed!