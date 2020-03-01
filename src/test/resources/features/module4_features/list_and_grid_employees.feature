Feature: able to see employee list and grid
  TEstCase: PROQ 228 - PROQ 174 USER STORY
  Employee Module- View List and Grid of Employees


  Background: User is already on Employee module page.
    Given User is on employee module page

    @listE
  Scenario: Employee list button click functionality
    When User clicks on the list option on the right corner
    Then the list of employees displayed on a new page



      @listB
    Scenario:Employee grid button click functionality
    When User clicks on the grid on the right corner
    Then the grid is displayed


