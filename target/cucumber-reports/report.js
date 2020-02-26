$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/able_to_mark_messages_as_Todo.feature");
formatter.feature({
  "name": "Organization chart",
  "description": "  User Story  : 189\n  Test case   : 236",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify marking messages as Todo",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ValentynTests"
    }
  ]
});
formatter.step({
  "name": "User is on employee module page",
  "keyword": "Given "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_is_on_employee_module_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on an Employee profile",
  "keyword": "And "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_clicks_on_an_Employee_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is able to see Employee Detailed Page (Antoine Langlais)",
  "keyword": "And "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_is_able_to_see_Employee_Detailed_Page_Antoine_Langlais()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user locate and hover message that he wants to Mark as TODO",
  "keyword": "And "
});
formatter.match({
  "location": "MarkMassageAsTodoStepDefs.user_locate_and_hover_message_that_he_wants_to_Mark_as_TODO()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on STAR icon",
  "keyword": "And "
});
formatter.match({
  "location": "MarkMassageAsTodoStepDefs.user_clicks_on_STAR_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "that message should be marked with star as TODO",
  "keyword": "Then "
});
formatter.match({
  "location": "MarkMassageAsTodoStepDefs.that_message_should_be_marked_with_star_as_TODO()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/able_to_select_related_employees.feature");
formatter.feature({
  "name": "Organization chart",
  "description": "  User Story  : 178\n  Test case   : 209",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify selection of the related employees",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ValentynTests"
    }
  ]
});
formatter.step({
  "name": "User is on employee module page",
  "keyword": "Given "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_is_on_employee_module_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on an Employee profile",
  "keyword": "And "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_clicks_on_an_Employee_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is able to see Employee Detailed Page (Antoine Langlais)",
  "keyword": "And "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_is_able_to_see_Employee_Detailed_Page_Antoine_Langlais()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on any employee in OC (Organization Chart)",
  "keyword": "And "
});
formatter.match({
  "location": "SelectRelatedEmployeeFromOCStepDefs.user_clicks_on_any_employee_in_OC_Organization_Chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to see EDP of selected related employee",
  "keyword": "Then "
});
formatter.match({
  "location": "SelectRelatedEmployeeFromOCStepDefs.user_should_be_able_to_see_EDP_of_selected_related_employee()"
});
formatter.result({
  "status": "passed"
});
});