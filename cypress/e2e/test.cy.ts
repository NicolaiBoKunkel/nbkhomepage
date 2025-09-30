describe('Home page', () => {
  it('renders the correct header text', () => {
    cy.visit('/')
    cy.get('header h1')
      .should('be.visible')
      .and('contain.text', 'Who am I?')
  })
})
