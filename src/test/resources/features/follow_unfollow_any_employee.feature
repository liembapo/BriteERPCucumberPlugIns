Feature: Follow unfollow
  tc :207
@t
  Scenario: Verify Follow unfollow functionality
    Given User is on employee module page
    And   User is able to see employees
    And   User is able to locate following or follow button
    And   User clicks on the follow or unfollow button
    Then  User can see that the text on follow button changed to following
