Feature: Looking for information of Wikipedia

  I want to be able to open Wikipedia and look for information

  Scenario: Looking for available tools on Wikipedia
    Given I navigate to Wikipedia page https://en.wikipedia.org/wiki/Main_Page
    Then under Tools section I see 7 items
