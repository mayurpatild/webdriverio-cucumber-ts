@Video
Feature: Video playback

    As users, we are going to load the campaign url, 
    We need to ensure videos can be played

    Background:
        Given I open the url "https://www.volvocars.com/intl/v/car-safety/a-million-more" and accept cookies

    Scenario: Playing a video on page
        Then I play video and validate pause and play