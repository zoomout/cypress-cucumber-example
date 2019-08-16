import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

const url = "https://google.com";

Given(`I navigate to Google page`, () => {
    cy
        .visit(url);
});

When(/^I search for (.*)$/, (text) => {
    cy
        .get("[name='q']").type(text).type('{enter}')
});

Then(/^the result is (.*)$/, (expectedResult) => {
    cy
        .get('#cwos')
        .should('have.text', expectedResult)
});
