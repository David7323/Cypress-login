import userData from '../fixtures/user-data.json'


describe('Orange HRM Test', () => {

const selectorList = {
  usernameField: "[name='username']",
  passwordField: "[name='password']",
  loginButton: "[type='submit']",
  sectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
  wrongCredentialAlert: ".oxd-alert",
  dashboardGrid:".orangehrm-dashboard-grid",
} 
  it('Login -Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSuccsess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccsess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal' , '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
  })
  it('Login -Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})