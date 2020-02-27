Feature: The Verification of Log note functionality
  User story : 250
  Test case : 213
  As a Manager/Officer user should be able to log in with user name and password

  @logTest
  Scenario: Verification of Log note functionality
    Given User is on employee module page
    When User clicks on an Employee profile
    And User clicks on log note button
    And User enters a log note text
    Then User should be able to see sent log note as most recent note


