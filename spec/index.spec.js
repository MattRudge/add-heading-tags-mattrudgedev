// CI Boilerplate code for DOM testing
// Opens the index.html file and attaches it to
// Jest's mock DOM

const $ = require('jquery');

beforeAll(() => {
  var fs = require("fs");
  // Change the filename here to the HTML file you're testing
  var newData = fs.readFileSync("./index.html", "utf-8");
  document.open();
  document.write(newData);
  document.close();
});

// Load script

const buttonClick = require("../src/index.js");

describe('DOM tests', () => {

    test("Checks to see if the heading exists", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });

    test("Expects content to change", () => {
        buttonClick();
        expect($('#par').text()).toEqual("You Clicked");
    });
});