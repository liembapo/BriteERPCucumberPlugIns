
Feature: Timesheet
  User Story  : 184
  Test case   : 210
  User should be able to create and delete employee's timesheet

  @Smoke
  @module1
  Scenario: creating of Timesheet
#  Background: User is already on Employee module page.
    Given User is on employee module page
    When   User clicks on an Employee profile
    And User clicks on the Timesheets module in the right top corner of the Employee profile
    And User clicks on the Create button in the left top corner of the Timesheets page
    And User clicks on the Employee field to choose Employee name in the dropdown menu
    And User clicks on the Employee's name to select
    And User enters text in the Description field
    And User clicks on the Project field to choose a project in the dropdown menu
    And User clicks on the Project to select
    And User clicks on the Task field
    And User chooses a Task
    And User clicks on the Time Hours field
    And User enters amount of hours
    Then User clicks on the Save button in the left top corner of the Timesheets page
