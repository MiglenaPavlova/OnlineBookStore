export class SearchResultsPage {
    getSearchResults() {
      return cy.get('.search-results li');
    }
  }