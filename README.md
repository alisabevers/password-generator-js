# password-generator-js

## Description

This assignment required me to write the JS code that generates a random password, which meets the user's selected criteria. Upon clicking the "Generate Password" button, the user is prompted with alert boxes to determine the number of characters in their password, and whether they wanted it to include uppercase letters, lowercase letters, numbers, and symbols.

## What was included in the starter code? 

For this assignment, I was provided the HTML and CSS files, as well as some of the code in the JS file. The function which calls the generated password to print to the screen was already written. What I coded was the actual function to generate the password.

## How did I do it, and what were the biggest challenges?

The first thing I did was draft my pseudocode. I broke this assignment down into four parts/problems which I had to address in order:

* Prompt the user to make selections about their password. The first prompt also had requirements (password must be between 8-128 characters in length). If the user made a selection which did not meet the requirements, the user had to start over and try again. 
* Store the user's inputs and add them to a single array of what I called "available characters"
* Use the available characters to generate a password
* Return the generated password

As I addressed each of the above issues, another set of issues arose within that issue. My first issue was handling the error of when a user inputs a character length that didn't meet the requirement. My second issue was figuring out how to store the user's input and refer to their selections. Finally the biggest challenge was figuring out which JS method to use in order to randomly generate the password. 

## Takeaways

Overall, I'm happy I figured it out. With more practice, I hope writing functions will become easier.

## See my work!

![The password generator prompts the user with criteria and generates a password that meets the criteria](./Assets/03-javascript-homework-demo.png)

Click on this [link](https://alisabevers.github.io/password-generator-js/) to see the webpage, live!