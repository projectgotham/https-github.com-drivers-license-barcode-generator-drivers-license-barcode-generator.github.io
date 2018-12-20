/// <reference types="Cypress" />

describe('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8000')
  })

  it('types the name', () => {
    cy.get('[data-testid="first-name-input"]').type('Kyle')
    cy.get('[data-testid="middle-name-input"]').type('Brandon')
    cy.get('[data-testid="last-name-input"]').type('Decot')
  })
})
