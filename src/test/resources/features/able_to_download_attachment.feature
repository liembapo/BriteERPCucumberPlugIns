Feature: Download
  User Story  : 182
  Test case   : 225 , 226
  as a Manager/Officer user should see all attached/uploaded files as a number of total files in EDP header, able to download it

  Background: User is already on Employee module page.
    Given User is on employee module page
    And   user clicks on an Employee profile
    And   User is able to see Employee Detailed Page (EDP)

  Scenario: Employee module download file verification

    And   User click on Attachment on EDP header (dropdown available if it contains multiple files)
    And   User able to see all displayed files
    And   User click on the latest uploaded file
    Then  User should be able to download the file

  Scenario: Employee module download button verification
    Then  User should not see the file button attachment