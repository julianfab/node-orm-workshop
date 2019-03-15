const { Given, When, Then } = require('cucumber');
const assert = require('assert');

let answer = 0;

    Given('I start with {int}', function (input) {
        answer = input;
    });

    When('I add {int}', function (input) {
        answer = answer + input;
    });

    Then('I end up with {int}', function (input) {
        assert.equal(answer, input);
    });
/*const { Given, When, Then } = require('cucumber');
const assert = require('assert');

let answer = 0;

    Given('I start with {int}', function (input) {
        answer = input;
    });

    When('I add {int}', function (input) {
        answer = answer + input;
    });

    Then('I end up with {int}', function (input) {
        assert.equal(answer, input);
    });
Feature: Addition
    Scenario: 1+0
        Given I start with 1
        When I add 0
        Then I end up with 1
    
    Scenario: 1+1
        Given I start with 1
        When I add 1
        Then I end up with 2    
*/