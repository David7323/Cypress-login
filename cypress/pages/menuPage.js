class menuPage {

    selectorList()  {
      const selectors = {
        myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',

        
      }
      return selectors
    }
  
    
    accessMyInfo() {
        cy.get(this.selectorList().myInfoButton).click()

    }
  
  }      
  
  export default menuPage