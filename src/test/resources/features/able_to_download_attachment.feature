Feature: Download
  User Story  : 182
  Test case   : 225 , 226
  as a Manager/Officer user should see all attached/uploaded files as a number of total files in EDP header, able to download it

  Background: User is already on Employee module page.
    Given User is on employee module page



  Scenario: Employee module download file verification

    And   User clicks on an Employee profile
    And   User is able to see Employee Detailed Page (Antoine Langlais)
    And   User click on Attachment on EDP header (dropdown available if it contains multiple files)
    And   User able to see all displayed files
    And   User click on the latest uploaded file
    Then  User should be able to download the file

  Scenario: Employee module download button verification
    And   User clicks on an Employee profile (Ashley Presley)
    And   User is able to see Employee Detailed Page (Ashley Presley)
    Then  User should not see the file button attachment