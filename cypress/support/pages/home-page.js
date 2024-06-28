import home_page_selectors from "../selectors/home_page_selectors";

export class HomePage {
    visit(url) {
      cy.visit(url);
    }
  
    searchForBook(bookTitle) {
      cy.get(home_page_selectors.searchField).type(bookTitle + '{enter}');
    }
  }