Feature: open EDP
  as a Manager/Officer user should be able to open EDP (Employee Detailed Page)
  User Story: 176
  Test Case: 202

  @Smoke
Scenario: Employee Profile verification

Given User is on employee module page
  When User clicks on an Employee profile
  Then User is able to see Employee Detailed Page (Antoine Langlais)