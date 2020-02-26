$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/list_and_grid_employees.feature");
formatter.feature({
  "name": "able to see employee list and grid",
  "description": "  TEstCase: PROQ 228 - PROQ 174 USER STORY\n  Employee Module- View List and Grid of Employees",
  "keyword": "Feature"
});
formatter.background({
  "name": "User is already on Employee module page.",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "Employee list button click functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@listE"
    }
  ]
});
formatter.step({
  "name": "User clicks on the list option on the right corner",
  "keyword": "When "
});
formatter.match({
  "location": "List_and_grid_Step_defs.user_clicks_on_the_list_option_on_the_right_corner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list of employees displayed on a new page",
  "keyword": "Then "
});
formatter.match({
  "location": "List_and_grid_Step_defs.the_list_of_employees_displayed_on_a_new_page()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "User is already on Employee module page.",
  "description": "",
  "keyword": "Background"
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
formatter.scenario({
  "name": "Employee grid button click functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@listB"
    }
  ]
});
formatter.step({
  "name": "User clicks on the grid on the right corner",
  "keyword": "When "
});
formatter.match({
  "location": "List_and_grid_Step_defs.user_clicks_on_the_grid_on_the_right_corner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the grid is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "List_and_grid_Step_defs.the_grid_is_displayed()"
});
formatter.result({
  "status": "passed"
});
});