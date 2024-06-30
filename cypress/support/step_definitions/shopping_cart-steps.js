import { Before, Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { BookDetailPage, HomePage, SearchResultsPage, CheckoutPage } from '../pages/*.js';
import fixtures from 'cypress/fixtures/*.json';
import selectorsResultPage from '../support/selectors/search_result_selectors.js';


Given('I am on the home page', () => {
  HomePage.visit('https://www.automationteststore.com/');
});

When('I search for {bookTitle}', (bookTitle) => {
  HomePage.searchForBook(bookTitle);
});

Then('I should see search results', () => {
  cy.get(selectorsResultPage.resultBookTitle).should('be.visible');
  cy.get('.search-results').should('have.length.greaterThan', 0);
});

When('I select the first search result', () => {
  cy.get('.search-results li:first-child a').click();
});

Then('I should see the book\'s detail page', () => {
  cy.get('.book-detail').should('be.visible');
  cy.get('.book-title').should('contain', 'The Great Gatsby');
});

When('I add the book to my cart', () => {
  cy.get('.add-to-cart-button').click();
});

Then('I should see the book in my cart', () => {
  cy.get('.shopping-cart').should('be.visible');
  cy.get('.shopping-cart li').should('contain', 'Tides of Fire');
});

When('I proceed to checkout', () => {
  cy.get('.proceed-to-checkout-button').click();
});

Then('I should see the checkout page', () => {
  cy.get('.checkout-form').should('be.visible');
});

When('I enter billing and shipping details', () => {

  CheckoutPage.fillShippingDetails(fixtures.firstName, fixtures.lastName, fixtures.email,
    fixtures.street, fixtures.city, fixtures.postalCode);

  CheckoutPage.fillBillinggDetails(fixtures.cardNumber, fixtures.cardHolderName, fixtures.expirationDate,
    fixtures.CVV);
});

Then('I should see the order confirmation page', () => {
  cy.get('.order-confirmation-message').should('contain', 'Thank you for your order!');
});