Feature: peticion
    Scenario: Search the region of the country Colombia
        Given I enter the page
        When I make an API call using request
        Then Must to show me the region "Americas"