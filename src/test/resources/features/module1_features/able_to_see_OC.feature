Feature: able to see Organization Chart in EDP
  User Story: 177
  Test case: 205

  @Smoke
  Scenario: verify OC is displayed in EDP
    Given User is on employee module page
    When User clicks on an Employee profile
    Then User should be able to see Organization Chart