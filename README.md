# Interactive JavaScript

## Introduction

In this project, you will create an interactive page using JavaScript. You will apply your knowledge of coding in JS, manipulating the DOM, and detecting user events to make the page respond to user actions.

The project provides an HTML page (exo_events.html) for you to enhance. Your task is to add various features to the page to make it interactive. Remember, you are not allowed to modify the HTML file directly. All modifications will be done using JavaScript.

## Project Setup

Download the GitHub repository containing the HTML page (exo_events.html).

Create a file named script.js in the same folder, which will contain your JavaScript code. The HTML file already includes a reference to this script, so you don't need to add it manually.
Tips and Guidelines

When modifying elements or responding to events, ensure that you are targeting the correct elements. Print them to the console to verify. Take one step at a time to identify any potential issues.
Use console.log to debug and confirm the values of variables and HTML elements.

Keep in mind that functions like document.getElementsByClassName() return lists of elements (similar to arrays). You cannot directly apply modification functions to a list. Instead, select an element from the list to apply the modification. For example, document.getElementsByClassName("coucou")[0].innerHTML = "salut" will work, but document.getElementsByClassName("coucou").innerHTML = "salut" will result in an error.
Try to implement at least the first five functionalities. The rest are optional.
Read the provided hints to guide you through each functionality.

## Functionalities

**Functionality 1**: When the user clicks on the footer (footer), display "clique" in the console.
  
**Functionality 1-bis**: Enhance functionality 1 by displaying "clic numéro x" in the console, where x is the number of clicks starting from 1 and incrementing with each click.
  
**Functionality 2**: Make the "Hamburger Menu" functional. When the user clicks the hamburger menu button, remove the "collapse" class from the element with the ID navbarHeader. Clicking again should add the "collapse" class back to navbarHeader.

**Functionality 3**: If the user clicks the "Edit" button on the first card, the card's text should turn red irreversibly (unless the page is reloaded).

**Functionality 4**: Similar to functionality 3, when the user clicks the "Edit" button on the second card, the card's text should turn green. Clicking again should revert it to the original color.

**Functionality 5**: Implement a hidden "nuclear" feature. If the user double-clicks on the navbar, the entire Bootstrap styling should disappear, leaving the page without CSS. Double-clicking again should restore the original styling.

**Functionality 6**: When the user hovers over the "View" button of any card, the card should shrink. The text should disappear, the image should be reduced to 20% of its original size, and the "Edit" and "View" buttons should remain visible. Repeating the hover should restore the card to its original state.

**Functionality 7**: Clicking the grey ==> button should move the last card (bottom right) to the first position (top left). This allows rotating the cards.

**Functionality 8**: Clicking the blue <== button should move the first card to the last position. It's the opposite of functionality 7.

**Functionality 9**: Triggered by selecting the page logo ("JS & Events") and pressing a specific key.

Key "a" condenses the page to 4 Bootstrap columns on the left.

Key "y" condenses the page to 4 Bootstrap columns in the middle.

Key "p" condenses the page to 4 Bootstrap columns on the right.

Key "b" restores the normal layout.

