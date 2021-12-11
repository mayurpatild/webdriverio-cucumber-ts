@Image
Feature: Visual Regression

    As users, we are going to load the campaign url, 
    We need to ensure our images are intact

    Background:
        Given I open the url "https://www.volvocars.com/intl/v/car-safety/a-million-more" and accept cookies

    
    Scenario: Taking a screen shot of page
        When Page gets "loaded" capture "screen" and save image as "campaign-screen"
        Then I expect the captured "screen" image "campaign-screen" to match baseline
    
    Scenario: Taking a fullscreen shot of page
        When Page gets "loaded" capture "fullscreen" and save image as "campaign-screen"
        Then I expect the captured "fullscreen" image "campaign-screen" to match baseline
    
    Scenario: Taking a tabbable shot of page
        When Page gets "loaded" capture "tabbable" and save image as "campaign-screen"
        Then I expect the captured "tabable" image "campaign-screen" to match baseline