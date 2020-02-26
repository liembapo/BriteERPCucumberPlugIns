Feature: ability to send message in EDP
  as a Manager/Officer user should be able to send a message under employee profile
  User story: 179
  Test case: 194

  @Anton3
  Scenario: verify ability to send a message in EDP
    Given User is on employee module page
    When User clicks on an Employee profile
    And User clicks on Send message
    And User enters any text
    And User clicks on Send button
    Then User should see entered text as the most recent message