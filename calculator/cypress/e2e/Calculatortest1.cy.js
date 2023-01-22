describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://127.0.0.1:5500/Calculator-/calculator/index.html")
    cy.get("#clear-btn").click()
    cy.get('[value="9"]').click()
    cy.get('[value="*"]').click()
    cy.get('[value="2"]').click()
    cy.get(".equal-sign").click()
  })
})
