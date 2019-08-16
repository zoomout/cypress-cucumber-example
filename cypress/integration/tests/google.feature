Feature: Google calculator

  I want to use Google calculator functionality

  Scenario: Using Google search to do simple math calculation
    Given I navigate to Google page
    When I search for 6 * 7
    Then the result is 42
