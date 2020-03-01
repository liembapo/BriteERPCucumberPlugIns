Feature: Add employees to dashboard
  User Story : 188
  Test case  : 196
  as a Manager OR Officer user should be able to add Employees module to Dashboard, name it by any name and have it present in Dashboard


  @module3
  Scenario: Employee Module add Employees module to Dashboard

    Given User is on employee module page
    And user click on search box
    And  user click on favorite box
    And  user clicks add to dashboard
    Then user clicks on employee box
    And  user enter employee to dashboard
    And user clicks to dashboard tab
    Then user should see name on employee on dashboard