# Feedreader Project Overview

## Table of Contents

- [Instructions](#instructions)
- [How to run it](#howtorunit)
- [Project Requirements](#projectRequirements)
- [Resources/Techniques used](#resourcesused)

## Instructions

In this project we were given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included Jasmine and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where we got the project handed over to finish the tests.

## How to run it 

To run the application download the Github Zipfile (or clone the Github repository), extract it and double click on the index.html file within it. 
There is also a live demo available: [Live Demo](https://junks89.github.io/nanodegree-feedreader/)

## Project Requirements

- Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty
- Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty
- Write a new test suite named "The menu"
- Write a test that ensures the menu element is hidden by default
- Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display itself when clicked, and does it hide when clicked again?
- Write a test suite named "Initial Entries"
- Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container
- Write a test suite named "New Feed Selection"
- Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes

## Resources/Techniques used

- [Jasmine Cheatsheet](https://devhints.io/jasmine)
- [Jasmine](https://jasmine.github.io/)
- [Starter Code](https://github.com/udacity/frontend-nanodegree-feedreader)
- Object-Oriented JavaScript
