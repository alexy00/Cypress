/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'


class ContactUsForm{
        
    clickContact(){
      return cy.get('#menu-patient-main > :nth-child(6) > a').click()
    }
    typeFirst(){
      return cy.get('#swcontactform-firstname').type('First')
    }
    typeLast(){
      return cy.get('#swcontactform-lastname').type("last")
    }
    typeCity(){
      return cy.get('#swcontactform-city').type('City')
    }
    typeState(){
        return cy.get('#swcontactform-state').type('State')
    }
    typeZip(){
        return cy.get('#swcontactform-zip').type('11111')
    }
    typeEmail(){
        return cy.get('#swcontactform-email').type('email@gmail.com')
    }
    typePhone(){
        return cy.get('#swcontactform-phone').type('1234567890')
    }
    selectOpt2(){
        return cy.get('#swcontactform-pain_area').select('2')
    }
    selectOpt4(){
        return cy.get('#swcontactform-referral').select('4')
    }
 } 
export default ContactUsForm;
