export class CheckoutPage {
    getCheckoutForm() {
      return cy.get('.checkout-form');
    }
  
    fillBillinggDetails(cardNumber, cardHolderName, ) {
        cy.get('[name="first_name"]').type(cardNumber);
        cy.get('[name="last_name"]').type(cardHolderName);
        cy.get('[name="email"]').type(emailAddress);
        cy.get('[name="street"]').type(street);
        cy.get('[name="city"]').type(city);
        
    }
    fillShippingDetails(firstName,LastName,emailAddress, street, city,){
        cy.get('[name="first_name_shipping"]').type(firstName);
        cy.get('[name="last_name"]').type(LastName);
        cy.get('[name="email"]').type(emailAddress);
        cy.get('[name="street"]').type(street);
        cy.get('[name="city"]').type(city);
        
        
    }
  }