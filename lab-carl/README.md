# 401 JS Lab 03 Async

**Author**: Carl Olson
**Version**: 1.0.0 

## Overview

This lab focused on async function calls and figuring out how to have things execute in a particular order. We were also introduced to logger, an alternative way to log errors and info.

The exported reader function has two parameters, a file path and a callback function. The function reads the file path and then returns the callback function which reads the file at that file path. This is invoked in the main.js where it pushes the returned value/data to the results array.

## Getting Started

Install devDependencies.
Create lib, assets, and __test__ directories and files. 
Write code and tests.

## Architecture

JavaScript, Node, Babel, ESLint, Jest, WinstonJS

## Change Log

04-18-2018 3:30pm - Installed dependencies and setup files. Started writing code.
04-18-2018 4:30pm - Functions written but not quite working correctly.
04-18-2018 5:30pm - Verified functions are working correctly and logger now functional. Tests not setup correctly yet so not passing.
04-18-2018 9:30pm - Tried some tweaks to the tests before realized I needed to install dependencies as devDependencies so I created a new directory and copy/pasted over code. Tests now passing. 

## Credits and Collaborations

Text inspired from lorem ipsum generators: https://www.shopify.com/partners/blog/79940998-15-funny-lorem-ipsum-generators-to-shake-up-your-design-mockups

I worked with my classmate Kris and had help from TAs Sean and Joy, as well as our instructor Vinicio.