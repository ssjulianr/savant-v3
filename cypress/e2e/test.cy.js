describe('Home Page', () => {
  beforeEach(() => {
    // Visit the home page before each test
    cy.visit('/'); // Replace with the actual URL of your home page
  });

  it('should display the correct h2 tag with "SAVANT RECORDS"', () => {
    // Find the h2 tag and check its text content
    cy.get('h2').should('have.text', 'SAVANT RECORDS');
  });


  it('should contain the correct h5 tag inside the marquee', () => {
    // Find the h5 tag inside the marquee and check its text content
    cy.get('marquee h5').should(
      'have.text',
      "SALE: USE DISCOUNT CODE 'R2H-C13' FOR 25% OFF + FREE SHIPPING!"
    );
  });

  it('should have loop equal to -1, scrollamount of 5, and width of 100%', () => {
    // Find the marquee tag and check its attributes
    cy.get('marquee')
      .should('have.attr', 'loop', '-1')
      .should('have.attr', 'scrollamount', '5')
      .should('have.attr', 'width', '100%');
  });

  it('should display the first slide initially', () => {
    // Assert that the first slide is visible
    cy.get('.slide').eq(0).should('be.visible');
  });

  it('should slide to the next slide after a delay', () => {
    // Wait for the initial slide to be displayed
    cy.get('.slide').eq(0).should('be.visible');

    // Wait for the sliding animation delay (change this value as needed)
    cy.wait(1500);

    // Assert that the second slide is visible after the delay
    cy.get('.slide').eq(1).should('be.visible');
  });
});



  