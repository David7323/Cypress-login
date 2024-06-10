import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import dashboardPage from '../pages/dashboardPage.js'
import menuPage from '../pages/menuPage.js'


const loginPage = new LoginPage()

const dashboard = new dashboardPage()

const menu = new menuPage()

describe('Orange HRM Test', () => {

const selectorList = {
  // usernameField: "[name='username']",
  // passwordField: "[name='password']",
  // loginButton: "[type='submit']",
  sectionTitleTopBar: ".oxd-topbar-header-breadcrumb > .oxd-text",
  wrongCredentialAlert: ".oxd-alert",
  dashboardGrid: ".orangehrm-dashboard-grid",
  myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
  firstNameField: "[name='firstName']",
  lastNameField: "[name='lastName']",
  genericField: ".oxd-input--active",
  dateField: "[placeholder='dd-mm-yyyy']",
  genericCombobox: ".oxd-select-text--arrow",
  dateCloseButton: '.--close',
  submitButton: "[type='submit']",
} 
  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUAnySer(userData.userSuccsess.username, userData.userSuccsess.password)
    // cy.visit('/auth/login')
    // cy.get(selectorList.usernameField).type(userData.userSuccsess.username)
    // cy.get(selectorList.passwordField).type(userData.userSuccsess.password)
    // cy.get(selectorList.loginButton).click()
    dashboard.checkdashboardPage()
    //cy.location('pathname').should('equal' , '/web/index.php/dashboard/index')
    //cy.get(selectorList.dashboardGrid)
    menu.accessMyInfo()
    //cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type('David')
    cy.get(selectorList.lastNameField).clear().type('Silva')
    //cy.get(selectorList.genericField).eq(3).clear().type('NickName')
    cy.get(selectorList.genericField).eq(3).clear().type('Employee')
    cy.get(selectorList.genericField).eq(4).clear().type('otherIdTest')
    cy.get(selectorList.genericField).eq(5).clear().type('Drivers License')
    cy.get(selectorList.genericField).eq(6).clear().type('2025-03-10')
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.submitButton).eq(1).click()
    cy.get('body').should('contain','Successfully Saved')
    cy.get('.oxd-toast-close')
    cy.get(selectorList.genericCombobox).eq(0).click({ force: true})
    cy.get(':nth-child(27) > span').click()
    cy.get(selectorList.genericCombobox).eq(1).click({ force: true})
    cy.get('.oxd-select-dropdown > :nth-child(3)').click()
    cy.get(selectorList.genericField).eq(8).clear().type('1987-22-12')
    cy.get(selectorList.dateCloseButton).click()







   

    //cy.get(selectorList.genericField).eq(8).clear().type('snnNumberTest')
    //cy.get(selectorList.genericField).eq(9).clear().type('SinNumberTest')
   })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})