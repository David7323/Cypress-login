class dashboardPage {

    selectorList()  {
      const selectors = {
         dashboardGrid: ".orangehrm-dashboard-grid",
        
      }
      return selectors
    }
  
    
    checkdashboardPage() {
        cy.location('pathname').should('equal' , '/web/index.php/dashboard/index')
        cy.get(this.selectorList().dashboardGrid).should('be.visible')
  
    }
  
  }      
  
  export default dashboardPage