@Navigation
Feature: Navigations

    As users, we are going to load the campaign url, 
    Navigations and Backlinks should be intact

    Background:
        Given I open the url "https://www.volvocars.com/intl/v/car-safety/a-million-more"
    
    Scenario: Accept cookies Modal
        When I click on the button "button.optanon-allow-all.accept-cookies-button"
        Then I expect that element "div.optanon-alert-box-wrapper" becomes not displayed

    Scenario: Open site navigation
        When I click on the button "button[id='sitenav-sidenav-toggle']"
        Then I expect that element "div[data-autoid='nav:sideNavigationContainer']" is displayed
    
    Scenario: Open Buy Car option from hamburger Menu
        When I clicked "Buy" from model menu
        Then I expect "Purchase" model items is displayed
    
    
    Scenario: Open Own Car option from hamburger Menu
        When I clicked "Own" from model menu
        Then I expect "Owner info" model items is displayed
    
    
    Scenario: Open Buy Car and redirect to "Fleet Sales"
        When I clicked "Buy" from model menu
        Then I expect "Fleet Sales" to be redirected to page with link "https://www.volvocars.com/intl/v/buy/fleet-cars"
        And I expect "Fleet Sales" to be redirected to page with title "Fleet cars | Volvo cars - International"
    
    
    Scenario: Open Own Car and redirect to "Support"
        When I clicked "Own" from model menu
        Then I expect "Support" to be redirected to page with link "https://www.volvocars.com/intl/support"
        And I expect "Support" to be redirected to page with title "Support | Volvo Cars | Volvo Support"