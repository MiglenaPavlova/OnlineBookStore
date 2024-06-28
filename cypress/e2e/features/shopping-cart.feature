Feature: Shopping Cart
  As a customer
  I want to be able to search for a book, add it to my cart, and checkout
  So that I can purchase the book online

Scenario: Search for a book, add to cart, and checkout
  Given I am on the home page
  When I search for <bookTitle>
  Then I should see search results
  When I select the first search result
  Then I should see the book's detail page
  When I add the book to my cart
  Then I should see the book in my cart
  When I proceed to checkout
  Then I should see the checkout page
  When I enter billing and shipping details
  Then I should see the order confirmation page

   Examples:
      | bookTitle | 
      | "Tides of Fire" |