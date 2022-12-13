describe('App E2E', () => {
  it('should assert that true is equal to true', () => {
    expect(true).to.equal(true)
  })
})




  describe('App E2E', () => {
    it('should assert that true is equal to true', () => {
      expect(true).to.equal(false)
    })
  })

  describe('App E2E', () => {
    it('should have a header', () => {
      cy.visit('http://localhost:8080')
  
      cy.get('h1').should('have.text', 'My Counter')
    })
  })


  describe('App E2E', () => {
    it('should have a header', () => {
      cy.visit('http://localhost:3002/omarelfounti/End-to-end-testing-E2E-.git/')
  
      cy.get('h1').should('have.text', 'My Counter')
    })
  
    it('should increment and decrement the counter', () => {
      cy.visit('http://localhost:3002/omarelfounti/End-to-end-testing-E2E-.git/')
  
      cy.get('p').should('have.text', '0')
    })
  })

  describe('App E2E', () => {
    it('should have a header', () => {
      cy.visit('http://localhost:3002/omarelfounti/End-to-end-testing-E2E-.git/')
  
      cy.get('h1').should('have.text', 'My Counter')
    })
  
    it('should increment and decrement the counter', () => {
      cy.visit('http://localhost:3002/omarelfounti/End-to-end-testing-E2E-.git/')
  
      cy.get('p').should('have.text', '0')
  
      cy.contains('Increment').click()
      cy.get('p').should('have.text', '1')
  
      cy.contains('Increment').click()
      cy.get('p').should('have.text', '2')
  
      cy.contains('Decrement').click()
      cy.get('p').should('have.text', '1')
    })
  })