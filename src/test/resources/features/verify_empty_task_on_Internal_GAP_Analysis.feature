
Feature: verify empty task on Internal GAP-Analysis
  User Story  : 185
  Test case   : 204

  @b
    Scenario: Verify empty task on Internal GAP Analysis
    Given User is on employee module page
    And   User clicks on an Employee profile
    And   User click on timesheet button
    And   User able to see timesheet page
    And   User create a new timesheet
    And   User add specific employee name (Antoine Langlais)
    And   User add description (test)
    And   User add name of project (Internal - GAP Analysis)
    Then  verify the project has no task

