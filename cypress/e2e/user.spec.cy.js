import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

    const selectorsList = {
      usernameField: "[name='username']",
      passwordField: "[name='password']",
      loginButton: "[type='submit']",
      sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
      dashboardGrid: ".orangehrm-dashboard-grid",
      wrongCredentialAlert: "[role='alert']",
      myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
      firstNameField: "[name='firstName']",
      lastNameField: "[name='lastName']",
      genericField: ".oxd-input--active",
      dateField: "[placeholder='yyyy-mm-dd']",
      dateCloseButton: ".--close",
      submitButton: "[type='submit']",

      
    }

   

  it.only('User Info update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTeste')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('NicknameTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(5).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('DriversLicenseTest')
    cy.get(selectorsList.dateField).eq(0).clear().type('2020-09-01')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericField).eq(8).clear().type('ssnNumberTest')
    cy.get(selectorsList.genericField).eq(9).clear().type('sinNumberTest')
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Update')
    cy.get('.oxd-toast-close')
    
    
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)

  })
})