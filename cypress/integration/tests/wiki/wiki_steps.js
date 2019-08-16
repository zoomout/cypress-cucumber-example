import {Given, Then} from "cypress-cucumber-preprocessor/steps";

Given(/^I navigate to Wikipedia page (.*)$/, (url) => {
    cy
        .visit(url);
});

Then(/^under (.*) section I see (.*) items$/, (section, numberOfItems) => {
    cy
        .get('#p-tb-label').should('have.text', section)
        .find("+ .body").find("li").filter(':visible').should('have.length', numberOfItems)
});
