/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import ContactUsPage from '../integration/ContactUsPage'
import 'cypress-iframe'


describe('Test', () => {
    it('Child Tab', () => {
        const contactUs = new ContactUsPage(); 
        cy.visit("https://stimwavefreedom.com/")
        cy.wait(1500)
        contactUs.clickContact()
        contactUs.typeFirst()
        contactUs.typeLast()
        contactUs.typeCity()
        contactUs.typeState()
        contactUs.typeZip()
        contactUs.typeEmail()
        contactUs.typePhone()
        contactUs.selectOpt2()
        contactUs.selectOpt4()
        cy.get('[style="width: 304px; height: 78px;"] > div > iframe')
        .then($iframe => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body)
        //.find('.recaptcha-checkbox-border')
        .find("span[role='checkbox']")
        .should('be.visible')
        .click()
      })    
  })
  })