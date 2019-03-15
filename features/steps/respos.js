/*eslint-disable no-unused-vars, unknown-require*/
const { Given, When, Then, setDefaultTimeout } = require('cucumber');
var request = require('request');
const assert = require('assert');
const fetch = require("node-fetch");

let route;
let result = {};
let word;

Given('I enter the page',function() {
    route = 'https://restcountries.eu';
});

When('I make an API call using request',function() {
    fetch(route+'/rest/v2/name/colombia')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            result = myJson[0];
            word = result['region'].toString();
        });
});

Then('Must to show me the region {string}',function (input){
   fetch(route+'/rest/v2/name/colombia')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            result = myJson[0];
            word = result['region'].toString();
            assert.equal(word, input); 
        });
});