class LoginPage {

  selectorList()  {
    const selectors = {
        usernameField: "[name='username']",
        passwordField: "[name='password']",
        loginButton: "[type='submit']",
        wrongCredentialAlert: ".oxd-alert",
    }
    return selectors
  }

  accessLoginPage() {
    cy.visit('/auth/login')
  }

  loginWithUAnySer(username, password) {
    cy.get(this.selectorList().usernameField).type(username)
    cy.get(this.selectorList().passwordField).type(password)
    cy.get(this.selectorList().loginButton).click()

  }

}      

export default LoginPage