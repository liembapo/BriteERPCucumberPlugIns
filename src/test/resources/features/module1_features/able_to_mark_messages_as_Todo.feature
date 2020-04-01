Feature: Organization chart
  User Story  : 189
  Test case   : 236

  @Smoke
    @module1
  Scenario: Verify marking messages as Todo
    Given User is on employee module page
    And   User clicks on an Employee profile
    And   User is able to see Employee Detailed Page (Antoine Langlais)
    And user locate and hover message that he wants to Mark as TODO
    And user clicks on STAR icon
    Then that message should be marked with star as TODO
