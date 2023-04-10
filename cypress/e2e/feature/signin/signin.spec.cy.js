import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'

Given(/^I am on homepage$/, () => {
	cy.LoadPage();
});
