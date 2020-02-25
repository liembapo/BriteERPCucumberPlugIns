@TestSearchBoxFunctionalities
Feature: Employee search box functionalities

  user story PROQ_186
  User should be able to make a complete or partial search and be able to see matching search results
  Search box should show suggestions when user is typing name
  test case PROQ_237

  Background:
    Given user should be on employee page
@SearchBoxSuggestions
Scenario: Search box suggestions and partial search abilities will be tested

  When user should type in in the search box on the right upper corner of the page
  And user should be able to see search suggestions
  Then user should be able to select a given suggestion

@TestFullNameSearch
Scenario:

  When user should typed in a an employee name
  And user should type entire name in the search box
  And user should be able to see search results on the page

@TestFirstNameSearch
Scenario:

  When user should be able to search only fist name of an employee
  And user should be able to see search results on the page

@TestLastNameSearch
Scenario:

  When user should be able to search only last name of an employee
  And user should be able to see search results on the page

@TestPartialNameSearch
Scenario:

  When user should be able to search only part of first or last name of an employee
  And user should be able to see search results on the page



