describe('First TestSuite', () => {
    it('Verify Title of the Page- Positive!', () => {
     cy.visit('https://www.nopcommerce.com/en')
    cy.title().should('include','nopCommerce1')

    })

    it('Verify Title of the Page !- Negative', () => {
      cy.visit('https://www.nopcommerce.com/en')
     cy.title().should('include','nopCommerce')
 
     })

  })
