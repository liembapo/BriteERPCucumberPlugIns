Feature: Organization chart
  User Story  : 178
  Test case   : 209


  @module2
  Scenario: Verify selection of the related employees
    Given User is on employee module page
    And   User clicks on an Employee profile
    And   User is able to see Employee Detailed Page (Antoine Langlais)
    And user clicks on any employee in OC (Organization Chart)
    Then user should be able to see EDP of selected related employee