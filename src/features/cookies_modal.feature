@Modal
Feature: Modal/dialogs - Cookies | Menu

    As users, we are going to load the campaign url, 
    Modal dialogs should be displayed

    Background:
        Given I open the url "https://www.volvocars.com/intl/v/car-safety/a-million-more"

    
    Scenario: Display Cookie policy alertbox
        Then I expect that element "div.optanon-alert-box-bg" becomes displayed

    Scenario: Accept cookies
        When I click on the button "button.optanon-allow-all.accept-cookies-button"
        Then I expect that element "div.optanon-alert-box-wrapper" becomes not displayed

    Scenario: Cars menu modal hover
        When I click on the button "button[id='sitenav-sidenav-toggle']"
        Then I expect that element "button[data-autoid='nav:siteNavCloseIcon']" becomes displayed