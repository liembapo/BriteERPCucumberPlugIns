
Feature: Timesheet
  User Story  : 251
  Test case   : 252
  User should be able to delete employee's timesheet

  @slava2
  Scenario: deleting of Timesheet
    #  Background: User is already on Employee module page.
    Given User is on employee module page
    And User clicks on an Employee profile
    And User clicks on the Timesheets module in the right top corner of the Employee profile
    And User clicks on one of the options to choose timesheet
    And User clicks on the Action button to choose an action
    And User clicks on the Delete option
    Then User clicks on the Ok button

